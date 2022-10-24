 import {FaUser} from 'react-icons/fa'
 import { useSelector,useDispatch } from 'react-redux'
 import { useNavigate } from 'react-router-dom'
 import {toast} from 'react-toastify'
import {useState, useEffect} from 'react'
import {register, reset} from '../features/auth/authSlice'
function Register() {
    const [formData, setFormaData] = useState({
        name:'',
        email:'',
        password:'',
        password1:''
    })
    const {name, email, password, password1} = formData
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onChange = (e)=>{
        setFormaData((prevState)=>({
            ...prevState,
            [e.target.name] : e.target.value,
        }))
    }
    const onSubmit = (e)=>{
        e.preventDefault()
    }
  return <>
          <section className='heading'>
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>


      <section className='form'>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    {/* 7ayedt value khas nrj3ha */}
                <input type="text" className="form-control" id='name'  placeholder='Enter your name' onChange={onchange}/>
                <input type="text" className="form-control" id='email'  placeholder='Enter your email' onChange={onchange}/>
                <input type="password" className="form-control" id='password'  placeholder='Enter your password' onChange={onchange}/>
                <input type="password" className="form-control" id='password1'  placeholder='Confirm password1' onChange={onchange}/>
                </div>
                <div className="form-group"><button type='submit'>submit</button></div>
            </form>
        </section>
    </>
}

export default Register