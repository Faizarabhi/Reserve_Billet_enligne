import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Trip from './components/TripItem'

import Login from './pages/Login'
import Register from './pages/Register'
import  Footer  from './components/Footer'
import SearchTrip from './components/SearchTrip'


function App() {
  return (<>
      <Router>
    <div className="App">
    <Header/>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/trip" element={<Trip/>}/>
        <Route path='/tripSearch' element={<SearchTrip/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
    </Router>
    <ToastContainer/>
      <Footer/>
    </>
  );
}

export default App;
