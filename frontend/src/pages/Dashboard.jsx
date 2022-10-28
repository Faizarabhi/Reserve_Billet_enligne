import Header from '../components/Header'
import Reserve from '../components/Reserve'
import About from '../components/About'

import img from '../assets/pet.jpeg'
function Dashboard() {
  return (
    <>
      <Header/>
      <div className=' '>
      <img src={img} className='object-cover w-screen'/>
      <div className="absolute sm:top-20 md:top-2/4 right-24  ">
      <Reserve/>
      </div>
      <About/>
      
      </div>
    </>
  )
}

export default Dashboard