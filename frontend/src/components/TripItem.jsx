import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteTrip, updateTrip} from "../features/trip/tripSlice";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { getTrips, reset } from "../features/trip/tripSlice";
import { Menu, Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function TripItem() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const newTrips = [];

  // const {user}  = useSelector(localStorage.getItem("user"))
  const { trips } = useSelector((state) => state.trips);
  console.log(typeof trips);
  newTrips.push(trips);
  console.log(newTrips);

  const user = localStorage.getItem("user");
  useEffect(() => {
    dispatch(getTrips());

    dispatch(reset());
  }, []);
  return (
    <>
    <div className="flex flex-wrap justify-center">
      {trips.map((trip) => (
        <div className="bg-blue-200 rounded-lg px-4 py-5 m-4 sm:px-6 ">
          <div className="flex space-x-3">
              <div className="flex justify-center items-center">
    <div className="stats bg-primary text-primary-content">
      <div className="stat">
        <div className="stat-title">From</div>
        <div className="stat-value">{trip.from}</div>
        <div className="stat-actions">
          <div className="btn btn-sm btn-success">Date Depart : {trip.Arrival_time}</div>
        </div>
      </div>

      <div className="stat">
        <div className="stat-title">To</div>
        <div className="stat-value">{trip.to}</div>
        <div className="stat-actions">
          <div className="btn btn-sm">Date Arrive :{trip.Arrival_time}</div>
        </div>
      </div>
      <div className="stat">
        <div className="stat-title">Price</div>
        <div className="stat-value">${trip.price_trip}.00</div>
        <div className="stat-actions">
          <div className="btn btn-sm">Time :6 h 5 min</div>
          <div className="btn btn-sm">Time :8 h 5 min</div>
        </div>
      </div>
     
    </div>
    </div>
            <div className="flex-shrink-0 self-center flex">
              <Menu as="div" className="relative z-30 inline-block text-left">
                <div>
                  <Menu.Button className="-m-2 p-2 rounded-full flex items-center text-gray-400 hover:text-gray-600 ">
                    <span className="sr-only z-0">Open options</span>
                    ...
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 z-50 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <div
                            onClick={() => {
                              dispatch(deleteTrip(trip._id));
                            }}
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "flex px-4 py-2 text-sm"
                            )}
                          >
                            <span>Delete</span>
                          </div>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                        <label htmlFor="my-modal-3" >  <div
                          onClick={()=>{
                            dispatch(updateTrip(trip._id))
                          }}
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "flex px-4 py-2 text-sm"
                            )}
                          >
                        {/* <span>Update</span> */}
                          </div>
                          </label>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <div
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "flex px-4 py-2 text-sm"
                            )}
                          >
                            <span>Report content</span>
                          </div>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
              
            </div>
          </div>
        </div>
      ))}
      {/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">Update Trip!</h3>
    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    
  <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
  <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
    <form >
      <div className="shadow sm:rounded-md sm:overflow-hidden">
        <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
          <div>
          </div>
          <div className="col-span-6 sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">From </label>
              <select type="text" name='from' id='from'   defaultValue='United States'  className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option value='United States' >United States</option>
                <option value='canada'>Canada</option>
                <option value='mexico'>Mexico</option>
              </select>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">To</label>
              <select name='to' id='to'   className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>

          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">Date Depart</label>
              <input type="date"  name='Departure_time' id='Departure_time'   className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
        </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Date arrive</label>
              <input type="date" name="Arrival_time" id="Arrival_time"   className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
        </div>
            <div className="col-span-6">
              <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">Price</label>
              <input type="number" min='1' name='price_trip' id='price_trip'   className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
        </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button type="submit" className="btn">Save</button>
        </div>
      </div>
    </form>
  </div>
</div>
  </div>
</div>
</div>
    </>
  );
}

export default TripItem;
