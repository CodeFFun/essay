import { useState } from "react"
import { auth } from "../config/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import { Link, useNavigate } from "react-router-dom"


function Login() {

  const navigate = useNavigate()

  const [input, setInput] = useState({
    email: '',
    password: '',
  })

  const onChange = (e) => {
    setInput((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }))
  }

  const onClick = async (e) => {
    e.preventDefault()
    try{
        await signInWithEmailAndPassword(auth, input.email, input.password).then((cred) => {
          console.log(cred.user)
          navigate('/waiting')
        })
    } catch(e) {
      console.log(e)
    }
  }
  return (
    <>
       <form className='form-group'>
        <span style={{ fontSize: '1.6em' }}>SignIn</span>
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
          <label htmlFor='email'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            className='form-input'
            value={input.password}
            onChange={onChange}
          />
        </div>
        <p className='forgot-password'><Link className='link' to='/forgotpassword'>Forgot Password</Link></p>
        <div className="input-group">
          <span>Don't have an account? <Link className="link" to='/signup'>SignUp</Link></span>
        </div>
        <button className='btn' onClick={onClick}>
          GetStarted
        </button>
        </form>
    </>
  )
}

export default Login