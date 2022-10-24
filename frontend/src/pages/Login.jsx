import {FaSignInAlt} from 'react-icons/fa'
import {useState, useEffect} from 'react'

function Login() {
  const [formData, setFormaData] = useState({
       
      email:'',
      password:'',
      
  })
  const { email, password} = formData
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
        <FaSignInAlt />Login
      </h1>
      <p>Sigin and get you Ticket</p>
    </section>


    <section className='form'>
          <form onSubmit={onSubmit}>
              <div className="form-group">
                  {/* 7ayedt value khas nrj3ha */}
              <input type="text" className="form-control" id='email'  placeholder='Enter your email' onChange={onchange}/>
              <input type="text" className="form-control" id='password'  placeholder='Enter your password' onChange={onchange}/>
              </div>
              <div className="form-group"><button type='submit'>submit</button></div>
          </form>
      </section>
  </>
}

export default Login