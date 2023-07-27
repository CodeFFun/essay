import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"


function ForgotPassword() {

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

  const onClick = (e) => {
    e.preventDefault()
  }
  return (
    <>
       <form className='form-group'>
        <span style={{ fontSize: '1.6em' }}>Change Password</span>
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
        <div className="input-group">
          <span>Go to<Link className="link" to='/signin'>  SignIn</Link></span>
        </div>
        <button className='btn' onClick={onClick}>
          Change Password
        </button>
        </form>
    </>
  )
}

export default ForgotPassword