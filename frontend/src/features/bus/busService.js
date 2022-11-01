import axios from 'axios'

const API_URL = '/api/grandbus/'

// Create new grandbus
const createGrandbus = async (grandbusData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, grandbusData, config)

  return response.data
}

// Get user grandbus
const getGrandbus = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Delete user grandbus
const deleteGrandbus = async (grandbusId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + grandbusId, config)

  return response.data
}

const grandbusService = {
  createGrandbus,
  getGrandbus,
  deleteGrandbus,
}

export default grandbusService