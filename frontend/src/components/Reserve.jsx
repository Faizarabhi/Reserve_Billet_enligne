import {useState} from 'react'
import bus from '../assets/bus.svg'
import callendar from '../assets/callendar.svg'
function Reserve() {
    const reserve = 'relative flex p-8 m-8 h-44 rounded-lg bg-[#ae4b29] '
    const inputStyle = 'border-b border-slate-300   pl-8 m-8 h-12 w-3/4 focus:outline-none  bg-[#ae4b29]'
    const inputs ='flex mt-4' 
    const selects = 'absolute flex '
    const select = 'focus:outline-none ml-4 z-50 w-max text-slate-300 text-sm rounded-lg bg-[#ae4b29] block w-full p-2.5'
    const btn = 'border rounded p-1 ml-4'
    const [display, setDisplay]= useState('hidden')
     const toggle = ()=>{
      setDisplay(display === 'hidden'? 'block': 'hidden')
  }
  
    
    // const [numad, setNum] = useState(1)
    const [formReserve,setFormReserve] = useState({numad:1,numenf:0,from:'',to:'',datedep:'',datear:''})
    const {numad,numenf,from,to,datedep,datear} = formReserve
    const incrNumber = ()=>{
      numad++
       }
    const decrNumber = ()=>{
      numad--
       }
      // const [numenf, setNumenf] = useState(1)
    
       const incrNumberenf = ()=>{
       
          }
       const decrNumberenf = ()=>{
        
          }
          const onChange = (e) => {
            setFormReserve((prevState) => ({
              ...prevState,
              [e.target.name]: e.target.value,
            }))
          }
          const onSubmit = (e) => {
            e.preventDefault()
        
            
            console.log(formReserve)
          }
  return (
    <>
    
    <form onSubmit={onSubmit}>
    <div className={reserve}>
    <div className={selects}>
<select id="countries" className={select}>
  <option selected>Round Trip</option>
  <option value="US">One way</option>
  <option value="CA">Round Trip</option>
</select>
<div className={select}>
  <option onClick={toggle} selected>Nombre de personne</option>
    <div  className={display}>
  <div className="bg-white absolute text-gray-500 w-full rounded p-2">
      <div onChange={onChange} name='adulte' className='mt-3' value={numad}>
    <span className='mr-4'>{numad}</span>
      Adultes
      <button onClick={decrNumber} type="button" className={btn}><span className='text-blue-500'>-</span></button>
      <span className='ml-4'>{numad}</span>
      <button onClick={incrNumber} type="button" className={btn}><span className='text-blue-500'>+</span></button>
      </div>

      <div onChange={onChange} name='enfant' className='mt-3' value={numenf}>
    <span className='mr-4'>{numenf}</span>
      Enfants
      <button onClick={decrNumberenf} type="button" className={btn}><span className='text-blue-500'>-</span></button>
      <span className='ml-4'>{numenf}</span>
      <button onClick={incrNumberenf} type="button" className={btn}><span className='text-blue-500'>+</span></button>
      </div>

    </div>
    
    </div>
    </div>
    </div>
    <div className={inputs} >
    <div className="relative h-4  text-white">
                {/* <input type="text" placeholder='from' value={from} onChange={onChange} name='from' className={inputStyle}/> */}
                <input type='text'  id='from'  name='from' value={from} placeholder='from' onChange={onChange} className={inputStyle} required/>
                <img className='w-8 h-8 absolute top-10 left-8' src={bus}/>
        </div>
      <div className="relative text-white h-4">
                <input type="text" placeholder='to' value={to} onChange={onChange} name='to' className={inputStyle}/>
                <img className='w-8 h-8 absolute top-10 left-8' src={bus}/>
      </div>
      <div className="relative h-4 ">
                <div className={inputStyle}>
                <label htmlFor='dateDep'>
                <img   className='w-8 h-8 absolute top-10 left-8' src={callendar}/>
                </label>
                <input type="date"  id='dateDep' value={datedep} onChange={onChange} name='datedep' />
                </div> 
      </div>
      <div className="relative h-4 ">
                <div className={inputStyle}>
                <label htmlFor='datear'>
                <img   className='w-8 h-8 absolute top-10 left-8' src={callendar}/>
                </label>
                <input type="date" id='datear' value={datear} onChange={onChange} name='datear' />
                </div> 
    </div>
      </div>
    </div>
    <button >bb</button>
    </form>
    </>
  )
}

export default Reserve