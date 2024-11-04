import { Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const CreateEvent = () => {
  const isAuthenticated = localStorage.getItem("token") || null;
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    latitude: "8.404746955649602",
    longitude: "49.01438194665317",
  });

  const handelChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    console.log(isAuthenticated);
    axios
      .post("http://localhost:3001/api/events", formData, {
        headers: { Authorization: `Bearer ${isAuthenticated}` }
      })
      .then((res) => {
        console.log("response data: " + res.data);
        alert("The event was saved successfully!");
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to save the event! " + err.message);
      });
  };
  return (
    <>
      {!isAuthenticated && alert("please sign up and or sign in first!")}
      {isAuthenticated ? (
        <div className="bg-gray-50 p-11">
          <form
            className="flex flex-col gap-4 p-6 rounded-md max-w-md mx-auto"
            onSubmit={handelSubmit}
          >
            <label className="font-medium">
              Title:
              <input
                className="input input-bordered   border-gray-400 w-full max-w-md shadow-lg"
                type="text"
                placeholder="Type here"
                required
                onChange={handelChange}
                name="title"
                value={formData.title}
              />
            </label>
            <label className="font-medium">
              Description:
              <textarea
                className="textarea textarea-bordered  border-gray-400 textarea-lg w-full max-w-md shadow-lg"
                placeholder="Type here"
                required
                onChange={handelChange}
                name="description"
              ></textarea>
            </label>
            <label className="font-medium">
              Date:
              <input
                className="input input-bordered  border-gray-400 w-full max-w-md shadow-lg"
                type="datetime-local"
                required
                onChange={handelChange}
                name="date"
              />
            </label>
            <label className="font-medium">
              Location:
              <input
                className="input input-bordered  border-gray-400 w-full max-w-md shadow-lg"
                type="text"
                placeholder="Type here"
                required
                onChange={handelChange}
                name="location"
              />
            </label>
            <button
              type="submit"
              className="btn btn-active bg-orange-500 text-white hover:bg-orange-600 font-bold"
            >
              Save Event
            </button>
          </form>
        </div>
      ) : (
        <Navigate to="/signIn" />
      )}
    </>
  );
};

export default CreateEvent;
