import { Link, useNavigate } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { logout, reset} from '../features/auth/authSlice'

function Header() {
  const btn = 'ml-8'

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector((state)=> state.auth)
  const onLogout = ()=>{
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }
  return (
    <header className='flex items-center justify-around p-4 '>
      <div className='logo'>
        <Link to='/'>TakeCar</Link>
      </div>
      <ul className='flex'>
        {user ? (
        <>
          <button onClick={onLogout}>
               Logout
            </button>
           </>
           ): (<>
            <li className={btn} >
              <Link to='/login'>
                 Login
              </Link>
            </li>
            <li className={btn} >
              <Link to='/register'>
                Register
              </Link>
            </li></>)}
          
        
      </ul>
    </header>
  )
}

export default Header