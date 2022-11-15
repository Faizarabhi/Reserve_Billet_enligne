import { Link, useNavigate } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { logout, reset} from '../features/auth/authSlice'
import logo from '../assets/logo.svg'
function Header() {
  const btn = 'ml-8'

  const navigate = useNavigate()
  const dispatch = useDispatch()
  // const {user} = useSelector((state)=> state.auth.user)
  const user = localStorage.getItem('user')
  const onLogout = ()=>{
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }
  return (
    
    <div className="navbar bg-base-100">
    <div className="flex-1">
      <a href="/">
      <img src={logo}/></a>
    </div>
    <div className="flex-none gap-2">
      <div className="form-control">
        {/* <input type="text" placeholder="Search" className="input input-bordered" /> */}
      </div>
      <div className="dropdown dropdown-end">
        <ul className='flex'>
        {user ? (

        <>
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="https://placeimg.com/80/80/people" />
          </div>
        </label>
        <h1 className=''>{user && user.name} </h1>
          <button onClick={onLogout} className='hover:bg-[#E76F51] hover:text-white hover:border-[#E76F51] border-2  border-[#264653]   text-[#264653] font-semibold h-16 py-2 px-4 rounded-lg'>
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
            </li>
        </>)}
          
        
      </ul>
      </div>
    </div>
  </div>
  )
}

export default Header



