import { Navigate } from "react-router-dom";

const CreateEvent = () => {
  console.log("value of token is: " + localStorage.getItem("token") || null);

  const isAuthenticated = localStorage.getItem("token") || null;
  return (
    <>
      {isAuthenticated ? (
        
          <div className="bg-gray-50 p-11">
            <form className="flex flex-col gap-4 p-6 bg-gray-50 rounded-md max-w-md mx-auto">
              <label>
                Title:
                <input
                  className="input input-bordered w-full max-w-md"
                  type="text"
                  placeholder="Type here"
                />
              </label>
              <label>
                Description:
                <textarea
                  className="textarea textarea-bordered textarea-lg w-full max-w-md"
                  placeholder="Type here"
                ></textarea>
              </label>
              <label>
                Date:
                <input
                  className="input input-bordered w-full max-w-md"
                  type="datetime-local"
                />
              </label>
              <label className="font-medium">
                Location:
                <input
                  className="input input-bordered w-full max-w-md"
                  type="text"
                  placeholder="Type here"
                />
              </label>
              <button className="bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-300 shadow-lg">
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
