import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTrip } from '../features/trip/tripSlice'
import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import {getTrips,reset} from '../features/trip/tripSlice'
import { Menu, Transition } from '@headlessui/react'
import { useNavigate } from 'react-router-dom'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
function TripItem() {
  const dispatch = useDispatch()
  const navigate= useNavigate()
  const { trip} = useSelector(
    (state) => state.trips
  )
  const user = localStorage.getItem('user')
  useEffect(() => {
    


     dispatch(getTrips())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate,dispatch])
  return (

    <div className="bg-blue-200 rounded-lg px-4 py-5 m-4 sm:px-6">
      <div className="flex space-x-3">
        <div className="flex-shrink-0">
        <p className="text-sm font-medium text-gray-900">
          From : {trip.from}
          </p>
          <p className="text-sm font-medium text-gray-900">
          To : {trip.to}
          </p>
        </div>
        <div className="min-w-0 flex-1">
        
          <p className="text-sm font-medium text-gray-900">
          Date Depart :{trip.Arrival_time}
          </p>
          <p className="text-sm font-medium text-gray-900">
          Date Arrive :{trip.Arrival_time}
          </p>
          <p className="text-sm text-gray-500">
            <a href="#" className="hover:underline">
            
            Date Création :{new Date(trip.createdAt).toLocaleString('en-US')}
            </a>
          </p>
        </div>
        <div className="flex-shrink-0 self-center flex">
          <Menu as="div" className="relative z-30 inline-block text-left">
            <div>
              <Menu.Button className="-m-2 p-2 rounded-full flex items-center text-gray-400 hover:text-gray-600 ">
                <span className="sr-only">Open options</span>
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
                      <a
                        onClick={()=>{ dispatch(deleteTrip(trip._id))}}
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'flex px-4 py-2 text-sm'
                        )}
                      >
                        <span>Delete</span>
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'flex px-4 py-2 text-sm'
                        )}
                      >
                        <span>Update</span>
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'flex px-4 py-2 text-sm'
                        )}
                      >
                        <span>Report content</span>
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  )
}

export default TripItem