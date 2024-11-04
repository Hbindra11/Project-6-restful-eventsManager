import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/api/auth/login",
        formData
      );
      localStorage.setItem("token", response.data.token);
      console.log("Login successful. Token received:", response.data.token);
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error.response.data);
      alert("Login failed");
    }
  };

  return (
    <div className="bg-gray-50 p-36">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-6 bg-gray-50 rounded-md max-w-md mx-auto"
      >
        <label className="flex flex-col text-left font-medium">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input input-bordered  border-gray-400 w-full max-w-md shadow-lg"
            placeholder="Type here"
          />
        </label>

        <label className="flex flex-col text-left font-medium">
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="input input-bordered  border-gray-400 w-full max-w-md shadow-lg"
            placeholder="Type here"
          />
        </label>

        <button
          type="submit"
          className="btn btn-active bg-orange-500 text-white hover:bg-orange-600 font-bold"
        >
          Sign In
        </button>

        <p className="mt-4 text-center ">
          Don&apos;t have an account?
          <button
            onClick={() => navigate("/signUp")}
            className="text-orange-500 hover:underline"
          >
            Sign Up
          </button>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
