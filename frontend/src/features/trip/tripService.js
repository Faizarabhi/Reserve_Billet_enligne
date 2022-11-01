import axios from 'axios'

const API_URL = '/api/trips'

// Create new trip
const createTrip = async (tripData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

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

// Delete user trip
const deleteTrip = async (tripId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + tripId, config)

  return response.data
}

const tripService = {
  createTrip,
  getTrips,
  deleteTrip,
}

export default tripService