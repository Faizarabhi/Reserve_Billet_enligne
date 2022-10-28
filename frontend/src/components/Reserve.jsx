import {useState} from 'react'
import bus from '../assets/bus.svg'
import callendar from '../assets/callendar.svg'

function Reserve() {
    const reserve = 'relative flex p-8 m-8 h-44 rounded-lg bg-[#E76F51] bg-opacity-80 '
    const inputStyle = 'border-b border-slate-300 rounded  pl-8 m-8 h-12 w-3/4 focus:outline-none  bg-[#E76F51]  bg-opacity-80'
    const inputs ='flex mt-4 ' 
    const selects = 'absolute flex '
    const select = 'focus:outline-none ml-4 z-50 w-max text-slate-300 text-sm rounded-lg bg-[#E76F51] block w-full p-2.5'
    const btn = 'border rounded p-1 ml-4'
    const [display, setDisplay]= useState('hidden')
     const toggle = ()=>{
      setDisplay(display === 'hidden'? 'block': 'hidden')
  }
  
    
  const [ad,setAd] = useState(0)
  const [enf,setEnf] = useState(0)
 
    const [formReserve,setFormReserve] = useState({numad:1,numenf:1,from:'',to:'',datedep:'',datear:''})
    const {from,to,datedep,datear} = formReserve
    const incrNumber = ()=>{
      setAd(ad+1)
      setFormReserve((prevState) => ({
        ...prevState,
        numad:ad+1,
      }))
       }
    const decrNumber = ()=>{
      setAd(ad-1)
      setFormReserve((prevState) => ({
        ...prevState,
        numad:ad-1,
      }))
       }
      // const [numenf, setNumenf] = useState(1)
    
       const incrNumberenf = ()=>{
        setEnf(enf+1)
         setFormReserve((prevState) => ({
          ...prevState,
          numenf:enf+1,
        }))
          }
       const decrNumberenf = ()=>{
        setEnf(enf-1)
        setFormReserve((prevState) => ({
         ...prevState,
         numenf:enf-1,
       }))
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
    <div className={reserve}  >
    <div className={selects}>
<select id="countries" className={select}>
  <option selected>Round Trip</option>
  <option value="US">One way</option>
  <option value="CA">Round Trip</option>
</select>
<div className={select}>
  <option onClick={toggle} selected>Nombre de personne</option>
    <div  className={display}>
  <div className="bg-white absolute text-white w-full rounded p-2 h-44 bg-[#264653df]">
      <div onChange={onChange}  className='mt-3' value={ad}>
    <span className='mr-4'>{ad}</span>
      Adultes
      <button onClick={decrNumber} type="button" className={btn}><span className='text-blue-500'>-</span></button>
      <span className='ml-4'>{ad}</span>
      <button onClick={incrNumber} type="button" className={btn}><span className='text-blue-500'>+</span></button>
      </div>

      <div onChange={onChange} className='mt-3' value={enf}>
    <span className='mr-4'>{enf}</span>
      Enfants
      <button onClick={decrNumberenf} type="button" className={btn}><span className='text-blue-500'>-</span></button>
      <span className='ml-4'>{enf}</span>
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
                <input type="date"  id='dateDep' value={datedep} onChange={onChange} name='datedep' min="2022-10-26"  />
                </div> 
      </div>
      <div className="relative h-4 ">
                <div className={inputStyle}>
                <label htmlFor='datear'>
                <img   className='w-8 h-8 absolute top-10 left-8' src={callendar}/>
                </label>
                <input datepicker datepicker-buttons type="date" id='datear' value={datear} onChange={onChange} name='datear'  min="2022-10-26" />
                
                </div> 

    </div>
    <button className='hover:bg-[#264653df] hover:text-[#fff] bg-[#264653]   text-white font-semibold h-16 py-2 px-4 rounded'>search</button>
      </div>
    </div>
    </form>
    </>
  )
}

export default Reserve