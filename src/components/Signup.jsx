import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../config/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify'

function Signup() {
  const [input, setInput] = useState({
    userName:'',
    email: '',
    password: '',
  })

  const navigate = useNavigate()

  const onClick = async (e) => {
    e.preventDefault()
    try {
      if(input.password.length >= 6){
       await createUserWithEmailAndPassword(
          auth,
          input.email,
          input.password
        ).then(async(cred) => {
         cred.user.displayName = input.userName
        })
        toast.success('User created')
        navigate('/waiting')
      } else{
        toast.error('Password must be atleast 6 letters')
      }
    } catch (err) {
      toast.error(err)
    }
  }

  const onChange = (e) => {
    setInput((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <>
      <form className='form-group'>
        <span style={{ fontSize: '1.6em' }}>Sign Up</span>
        <div className='input-group'>
          <label htmlFor='firstname'>Username</label>
          <input
            type='text'
            id='firstname'
            name='userName'
            className='form-input'
            value={input.firstName}
            onChange={onChange}
          />
        </div>
        <div className='input-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            className='form-input'
            value={input.email}
            onChange={onChange}
          />
        </div>
        <div className='input-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            className='form-input'
            value={input.password}
            onChange={onChange}
          />
        </div>
        <p>
          Sign in instead?
          <Link className="link" to='/signin'> SignIn </Link>
        </p>
        <button className='btn' onClick={onClick}>
          GetStarted
        </button>
      </form>
    </>
  )
}

export default Signup
