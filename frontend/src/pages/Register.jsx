 import {FaUser} from 'react-icons/fa'
 import { useSelector,useDispatch } from 'react-redux'
 import { useNavigate } from 'react-router-dom'
 import {toast} from 'react-toastify'
import {useState, useEffect} from 'react'
import {register, reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'
import img from '../assets/bus1.jpg'
function Register() {
  const inputStyle = "border-b border-slate-300  p-4 mb-8 h-12 w-3/4 ";
    const [formData, setFormData] = useState({
        fullname:'',
        email:'',
        password:'',
        password1:''
    })
    const {fullname, email, password, password1} = formData
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // const {user, isLoading, isError, isSuccess, message} =useSelector((state) => state.auth) 

  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)
  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }
    dispatch(reset())

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
   
  const onSubmit = (e) => {
    e.preventDefault()
    
   
      const userData = {
        fullname,
        email,
        password,
      }
      console.log(userData)
    
      if (password !== password1) {
        toast.error('Passwords do not match')
      } else {
        const userData = {
          fullname,
          email,
          password,
        }
  
        dispatch(register(userData))

      }
    if(isLoading){
        return <Spinner/>
    }
  }

  
  return <>
       

        <div className="m-0 p-0 h-screen w-screen  truncate font-Cairo ">
        <div className="flex  items-center">
        <div className="flex-1 "> 
        <div>
          <img src={img} alt="" className="h-full w-full object-cover truncate"/>
        </div>
        
        </div>
     
        <div className="flex-1  p-8 justify-center  ]">
          <form  className="flex ml-16  flex-col justify-items-start" onSubmit={onSubmit}>
          <div>
            <h1 className="font-bold mb-8 text-3xl">Create an acount, TakeCar</h1>
          </div>
            
              <input type='text' id='name' name='fullname' value={fullname} placeholder='Enter your name' onChange={onChange} className={inputStyle} required/> 
              <input type='email' id='email' name='email' value={email} placeholder='Enter your email' onChange={onChange} className={inputStyle} required/>
              <input type='password' id='password' name='password' value={password} placeholder='Enter password' onChange={onChange} className={inputStyle} required/>
              <input placeholder="Password Verified"  type='password' id='password1' name='password1' value={password1} onChange={onChange} className={inputStyle} required/>
              <button className="bg-[#ae4b29] rounded-lg  h-12 w-3/4  font-bold  text-white" type="submit">Sign up</button>
 
            </form>
          <Link to="/login"><div className="m-8 text-slate-400">Already have an account? <span className="font-xl text-black underline">Log in</span></div></Link> 
        </div>
        
       
        
      </div>
    </div>
    </>
}

export default Register