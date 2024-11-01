import {
  createBrowserRouter,
  createRoutesFromElements,
  //Link,
 // Outlet,
  Route,
  RouterProvider,
} from 'react-router-dom'; // Import required components and functions

import MainLayout from './components/MainLayout';
import Home from './components/Home';
import SignIn  from './components/SignIn';
import SignUp from './components/SignUp';
import CreateEvent from './components/CreateEvent';
import EventDetails from './components/EventDetails';

const App = () => {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="signIn" element={<SignIn />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="createEvent" element={<CreateEvent />} />
        <Route path="/events/:id" element={<EventDetails />} />
      </Route>,
    ),
  );
   
  return (
    <>
    <RouterProvider router={router} />         
    </>
  )
}

export default App
