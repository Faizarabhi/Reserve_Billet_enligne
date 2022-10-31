import axios from 'axios'

const API_URL = '/api/trips/'

//create new Trip
const createTrip = async (tripData, token) => {
    const config = {
      headers: {
        Authorization: `Bearer${token}`,
      },
    }
    console.log(tripData)

  const response = await axios.post(API_URL, tripData, config)

    return response.data
}
// Get user trips
const getTrips = async (token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  
    const response = await axios.get(API_URL, config)
  
    return response.data
  }
const tripService ={
    createTrip,
    getTrips
}

export default tripService