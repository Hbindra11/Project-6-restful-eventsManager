import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const EventDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [event, setEvent] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/events/${id}`)
      .then((res) => {
        setEvent(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
   
      {event && (
        <div className="hero bg-base-200 min-h-screen flex justify-center ">
          <div className="card bg-base-100 image-full m-10 w-1/3 shadow-xl">
            <figure>
              <img src="\src\assets\lamps-4333322_1280.jpg" alt="Lights" />
            </figure>
            <div className="card-body">
              {/* <h2 >New album is released!</h2> */}
              <h2 className="card-title"> {event.title}</h2>
              <p>{event.description}</p>
              <p>Location: {event.location}</p>
              <p>Date: {event.date.substr(0, 10)}</p>
              <div className="card-actions justify-end">
                <div>
                  <button className="underline" onClick={() => navigate(-1)}>
                    Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
     
    </>
  );
};

export default EventDetails;
