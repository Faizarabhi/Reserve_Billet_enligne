import png from '../assets/png.svg'

function About() {
  return (
    <>
    <div className="flex justify-center items-center ">
        <div className="border-2 flex justify-between  items-center rounded-lg  w-3/4 my-4 border-[#264653] p-2">
        
        <div className="max-w-max">
       <img className='w-full' src={png}/>
        </div> <div className="max-w-max">
       <h1 className='font-bold text-gray-500'>Members access great rates and savings</h1>
        <p>Sign up for access to personalized recommendations and Private Deals.</p>
        </div> 
        <div className="max-w-max">
       <input className='border-b border-slate-300   pl-8 m-8 h-12 focus:outline-none rounded-lg  bg-gray-200'/>
        </div>
        <div className="max-w-max">
            <button className='hover:bg-[#E76F51] hover:border-[#E76F51] bg-[#264653] border-2  border-[#264653]  text-white font-semibold  py-2 px-4 rounded-lg'>Go</button>    
              </div>
        
        
        </div>
    </div>
    </>
  )
}

export default About