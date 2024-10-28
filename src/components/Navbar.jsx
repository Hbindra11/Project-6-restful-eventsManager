import { Link } from "react-router-dom"; // Import required components and functions

// This component simply renders a navigation bar
const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* The Link component takes care of updating the history in the browser */}
        <Link to="/" className="text-white text-lg font-bold">
          Event-Scheduler
        </Link>
        <div className="flex space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link
            to="/SignUp"
            className="text-gray-300 hover:text-white"
          >
            Sign Up
          </Link>
          <Link
            to="/SignIn"
            className="text-gray-300 hover:text-white"
          >
            Sign In
          </Link>
          <Link
            to="/CreateEvent"
            className="text-gray-300 hover:text-white"
          >
            Create Event
          </Link>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
