
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {createTrip} from '../features/trip/tripSlice'
function TripForm() {
    const [from,setFrom] = useState('')
    const [to,setTo] = useState('')
    const [Departure_time,setDeparture_time] = useState('')
    const [Arrival_time,setArrival_time] = useState('')
    const [price_trip,setPrice_trip] = useState('')
    const dispatch = useDispatch()
    const onSubmit = e =>{
        e.preventDefault()
        console.log(from,to, Departure_time, Arrival_time, price_trip)
        dispatch(createTrip({from,to, Departure_time, Arrival_time, price_trip}))
    }
    


  return (
  <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
 

  <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
   

    <form onSubmit={onSubmit}>
      <div className="shadow sm:rounded-md sm:overflow-hidden">
        <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">Reservation Enligne Trip</h3>
            <p className="mt-1 text-sm text-gray-500">Use a permanent address where you can recieve mail.</p>
          </div>
          <div className="col-span-6 sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">From </label>
              <select type="text" name='from' id='from' value={from}  onChange={(e)=>setFrom(e.target.value)}  className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
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

            {/* <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
              <input type="text" name="city" id="city" autocomplete="address-level2" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
        </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <label htmlFor="region" className="block text-sm font-medium text-gray-700">State / Province</label>
              <input type="text" name="region" id="region" autocomplete="address-level1" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
        </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">ZIP / Postal code</label>
              <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
        </div> */}
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button type="submit" className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
        </div>
      </div>
    </form>

  </div>
</div>)


}

export default TripForm