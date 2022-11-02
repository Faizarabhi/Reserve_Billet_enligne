import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Header from '../components/controle/Header'
import {getTrips,reset} from '../features/trip/tripSlice'
import Reserve from '../components/Reserve'
import About from '../components/About'
import img from '../assets/pet.jpeg'
import TripForm from '../components/TripForm'
import Spinner from '../components/Spinner'
import TripItem from '../components/TripItem'
import Aside from '../components/controle/Aside'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // const {user}  = useSelector(localStorage.getItem("user")
  const { trips} = useSelector(
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
    <>
    <div className="max-w-max">
      <Header/>
      
      </div>
    {/* //   <div className='flex flex-col justify-center aligne-center mt-24'>
      
    //   <img src={img} className='object-cover w-screen'/>
    //   <div className="absolute sm:top-20 md:top-2/4 right-24  ">
    //   <Reserve/>
    //   </div>
    //   <About/>
    //   <TripForm/>

      
    //   </div>
    // </> */}
    
    <section className='heading'>
     
      <p>Trip Dashboard</p>
    </section>

  
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