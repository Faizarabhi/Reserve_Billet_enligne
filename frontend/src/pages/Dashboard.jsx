import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Header from '../components/Header'
import Reserve from '../components/Reserve'
import About from '../components/About'
import img from '../assets/pet.jpeg'
import TripForm from '../components/TripForm'
function Dashboard() {
  const navigate = useNavigate()
  const {user} = useSelector((state)=> state.auth)
  useEffect(()=>{
    if(!user) {navigate('/login')}
     
  },[user,navigate])

  return (
    <>
      <Header/>
      <div className='flex flex-col justify-center aligne-center mt-24'>
      
      <img src={img} className='object-cover w-screen'/>
      <div className="absolute sm:top-20 md:top-2/4 right-24  ">
      <Reserve/>
      </div>
      <About/>
      <TripForm/>

      
      </div>
    </>
  )
}

export default Dashboard