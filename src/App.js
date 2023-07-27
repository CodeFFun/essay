import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Waiting from './components/Waiting'
import Login from './components/Login'
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/signin' element={<Login />}/>
        <Route path='/forgotpassword' element={<ForgotPassword />}/>
        <Route path='/waiting' element={<Waiting />}/>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
