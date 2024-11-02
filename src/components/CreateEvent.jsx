import { Navigate } from "react-router-dom";
import { useState } from "react";

const isAuthenticated = localStorage.getItem("token") || null;

const CreateEvent = () => {
  console.log("value of token is: " + localStorage.getItem("token") || null);

  const handelSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      {isAuthenticated ? (
        <div className="bg-gray-50 p-11">
          <form className="flex flex-col gap-4 p-6 rounded-md max-w-md mx-auto">
            <label className="font-medium">
              Title:
              <input
                className="input input-bordered   border-gray-400 w-full max-w-md shadow-lg"
                type="text"
                placeholder="Type here"
              />
            </label>
            <label className="font-medium">
              Description:
              <textarea
                className="textarea textarea-bordered  border-gray-400 textarea-lg w-full max-w-md shadow-lg"
                placeholder="Type here"
              ></textarea>
            </label>
            <label className="font-medium">
              Date:
              <input
                className="input input-bordered  border-gray-400 w-full max-w-md shadow-lg"
                type="datetime-local"
              />
            </label>
            <label className="font-medium">
              Location:
              <input
                className="input input-bordered  border-gray-400 w-full max-w-md shadow-lg"
                type="text"
                placeholder="Type here"
              />
            </label>
            <button
              onSubmit={handelSubmit}
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
