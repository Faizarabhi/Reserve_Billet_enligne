
import { useEffect } from 'react'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {createTrip} from '../features/trip/tripSlice'
import busService from '../features/bus/busService'

function TripForm() {
    const [from,setFrom] = useState('')
    const [to,setTo] = useState('')
    const [Departure_time,setDeparture_time] = useState('')
    const [Arrival_time,setArrival_time] = useState('')
    const [price_trip,setPrice_trip] = useState('')
    const [grandbus,setGrandbus] = useState('')
    const [bus,setBus] = useState([])
    const dispatch = useDispatch()
    //const {from,to, Departure_time, Arrival_time, price_trip} = formData;

    const onSubmit = e =>{
        // e.preventDefault()
        const formData = {
          from :from,
          to : to,
          Departure_time:Departure_time, 
          Arrival_time:Arrival_time, 
          price_trip:price_trip,
          grandbus:grandbus
        }
        // console.log(from,to, Departure_time, Arrival_time, price_trip)
        console.log(formData)
        dispatch(createTrip(formData))
    }
    useEffect(()=>{
      const getbuses = async ()=>{
        const token = JSON.parse(localStorage.getItem("user")).token
        console.log(token)
       const res = await busService.getGrandbus(token)
       setBus(res)
      }
      getbuses();

    },[])
    


  return (
  <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
  <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
    <form onSubmit={onSubmit}>
      <div className="shadow sm:rounded-md sm:overflow-hidden">
        <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
          <div>
          </div>
          <div className="col-span-6 sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">From </label>
              <select type="text" name='from' id='from' value={from}  defaultValue='United States' onChange={(e)=>setFrom(e.target.value)}  className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option value='United States' >United States</option>
                <option value='canada'>Canada</option>
                <option value='mexico'>Mexico</option>
              </select>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">To</label>
              <select name='to' id='to' value={to}  onChange={(e)=>setTo(e.target.value)}  className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">BUS</label>
              <select name='grandbus' id='grandbus' value={grandbus}  onChange={(e)=>setGrandbus(e.target.value)} className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option selected disabled>choose a bus</option>
                {
                  bus.map((one)=>(
                    <option  value={one._id}>{one._id}</option>
                  ))
                }
              </select>
            </div>

          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">Date Depart</label>
              <input type="date"  name='Departure_time' id='Departure_time' value={Departure_time}  onChange={(e)=>setDeparture_time(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
        </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Date arrive</label>
              <input type="date" name="Arrival_time" id="Arrival_time" value={Arrival_time} onChange={(e)=>setArrival_time(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
        </div>
            <div className="col-span-6">
              <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">Price</label>
              <input type="number" min='1' name='price_trip' id='price_trip' value={price_trip}  onChange={(e)=>setPrice_trip(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
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
)


}

export default TripForm