import { useEffect, useState } from 'react'
import {AiOutlineHome, AiOutlineClockCircle, AiOutlineStar} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { auth } from '../config/firebase'
import { signOut } from 'firebase/auth'

function Nav() {

  const [userName, setUserName] = useState('')

  const navigate = useNavigate()

    useEffect(() => {
      const user = auth.currentUser
      if(user){
        setUserName(user.displayName)
     }
  }, [])

  const logout = async () => {
    try {
      await signOut(auth).then(() => {
        console.log('Done')
        navigate('/signin')
      })
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className='nav'>
        <button className='btn'>Create New Work</button>
        <div className="nav-link">
          <AiOutlineHome className='icon'/>
          <span>Home</span>
        </div>
        <div className="nav-link">
          <AiOutlineClockCircle className='icon' />
          <span>Recent</span>
        </div>
        <div className="nav-link">
          <AiOutlineStar className='icon'/>
          <span>Starred</span>
        </div>
        <div className="nav-link profile" onClick={logout}>
          <span>{userName}</span>
        </div>
    </div>
  )
}

export default Nav