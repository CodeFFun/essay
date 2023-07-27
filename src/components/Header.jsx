import logo  from '../resources/logo.png'


function Header() {
  return (
    <div className='header'>
     <img src={logo} alt="Logo" className='logo'/>
    </div>
  )
}

export default Header