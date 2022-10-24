import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import Login from "./pages/Login"
import Register from "./pages/Register";

function App() {
  return (<>
      <Router>
    <div className="App">
      <Header/>
      <Routes>
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
