import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/controle/Header'
import Dashboard from './pages/Dashboard'
import trip from './components/TripItem'

import Login from './pages/Login'
import Register from './pages/Register'


function App() {
  return (<>
      <Router>
    <div className="App">
   
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/trip" element={<trip/>}/>
       
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        
      </Routes>
    </div>
    </Router>
    <ToastContainer/>
    </>
  );
}

export default App;
