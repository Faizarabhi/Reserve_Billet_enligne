import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Header from '../components/Header'
import Reserve from '../components/Reserve'
import About from '../components/About'
import img from '../assets/pet.jpeg'
import TripForm from '../components/TripForm'
import Spinner from '../components/Spinner'
import {getTrips,reset} from '../features/trip/tripSlice'
import TripItem from '../components/TripItem'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { trips, isLoading, isError, message } = useSelector(
    (state) => state.trips
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

     dispatch(getTrips())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])
  if (isLoading) {
    return <Spinner />
  }
  return (
    // <>
    //   <Header/>
    //   <div className='flex flex-col justify-center aligne-center mt-24'>
      
    //   <img src={img} className='object-cover w-screen'/>
    //   <div className="absolute sm:top-20 md:top-2/4 right-24  ">
    //   <Reserve/>
    //   </div>
    //   <About/>
    //   <TripForm/>

      
    //   </div>
    // </>
    <>
    <section className='heading'>
     
      <p>Goals Dashboard</p>
    </section>

    {/* <TripForm /> */}

    <section className='content'>
      {trips.length > 0 ? (
        <div className='flex flex-wrap justify-center '>
          {trips.map((trip) => (
            <TripItem key={trip._id} trip={trip} />
          ))}
        </div>
      ) : (
        <h3>You have not set any goals</h3>
      )}
    </section>
  </>
  )
}

export default Dashboard