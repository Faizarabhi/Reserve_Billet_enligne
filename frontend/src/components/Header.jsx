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
          <button onClick={onLogout} >
               Logout
            </button>
           </>
           ): (<>
            <li className={btn} >
              <Link to='/login' className='hover:bg-[#E76F51] hover:text-white hover:border-[#E76F51] border-2  border-[#264653]   text-[#264653] font-semibold h-16 py-2 px-4 rounded-lg'>
                 Login
              </Link>
            </li>
            <li className={btn} >
              <Link to='/register' className='hover:bg-[#E76F51] hover:border-[#E76F51] bg-[#264653] border-2  border-[#264653]  text-white font-semibold h-16 py-2 px-4 rounded-lg'>
                Register
              </Link>
            </li></>)}
          
        
      </ul>
    </header>
  )
}

export default Header