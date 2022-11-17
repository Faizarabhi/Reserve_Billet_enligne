import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/Header";
import { getTrips, reset } from "../features/trip/tripSlice";
import Reserve from "../components/Reserve";
import About from "../components/About";
import img from "../assets/pet.jpeg";
import TripForm from "../components/TripForm";
import Spinner from "../components/Spinner";
import TripItem from "../components/TripItem";
import Service from "../components/Service";

function Dashboard() {
  const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')):'';
  

  return (
    <>
      <div className="flex flex-col justify-center  aligne-center">
        <img src={img} className="object-cover w-screen" />
        <div className="absolute sm:top-20 md:top-2/4 right-[12rem]  ">
          <Reserve />
        </div>
       
        <div className="flex justify-center items-center m-8">
        {user.user===1 ? ( <ul className="menu bg-base-100 w-56 rounded-box">
          <li>
            <label htmlFor="my-modal-3" className="btn bg-[#ae4b29] text-white">
              Create Trip
            </label>
          </li>
          <li>
            {" "}
            <a href="/trip" className="btn bg-[#ae4b29] text-white">
              {" "}
              Get all Trip
            </a>
          </li>
         
        </ul>): ''}
      </div>
        {/* Create */}
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative ">
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold">Reservation Enligne Trip</h3>
            <p className="mt-1 text-sm text-gray-500">
              Use a permanent address where you can recieve mail.
            </p>

            <TripForm />
          </div>
        </div>

        <About />
      </div>

      <Service />
      <div className="">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
          width="100%"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        />{" "}
      </div>
    </>
  );
}

export default Dashboard;
