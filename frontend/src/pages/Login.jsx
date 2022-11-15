import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import { Link} from 'react-router-dom'
import img from '../assets/bus.jpg'


function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    email: '',
    password: '', 
  })
  // useEffect() =
  // const userlog = localStorage.getItem('user')
  // if(userlog) {
  //   navigate('/')
  // }
useEffect(() => {
  
  const userlog = localStorage.getItem('user')
  if (userlog) {
    navigate('/')
  }
}, [])
  const inputStyle = "border-b border-slate-300  p-4 mb-8 h-12 w-3/4 ";
  const { email, password } = formData
 
  
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

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
      email,
      password,
    }

    dispatch(login(userData))
  }


  if (isLoading) {
    return <Spinner />
  }
return <>
  
      <div className="h-screen w-screen  truncate m-0 p-0">
        <div className="flex  items-center">
     


          <div className="flex-1  p-8 justify-center ">
          <form  className="flex ml-16  flex-col justify-items-start" onSubmit={onSubmit}>
          <div>
             <h1 className="font-bold mb-8 text-3xl ">Welcome back, TakeCar</h1>
             </div>
            
              
            
             <input  type='email' id='email' name='email' value={email} placeholder='Enter your email' onChange={onChange} className={inputStyle} required/>
            
            
            <input type='password'  id='password' name='password' value={password} placeholder='Enter password' onChange={onChange} className={inputStyle} required/>
          
             
              <button className="bg-[#ae4b29] rounded-lg  h-12 w-3/4  font-bold  text-white" type="submit">Sign in</button>
            </form>
          <Link to="/register"> 
          <div className="m-8 text-slate-400">don't have an account? <span className="font-xl text-black underline">sign up</span></div>
          </Link> 
        </div>
        
        <div className="flex-1 "> 
          <img alt="" src={img} className="h-full w-full object-cover truncate"/>
        
        
        </div>
        
      </div>
    </div>
  </>
}

export default Login