import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import LoginForm from './components/LoginForm';

function App() {
  const [loginInfo, setLoginInfo] = useState({loginButton: true, loginForm: false, isLoggedIn: false});

  function changeLoginInfo() {
    setLoginInfo(prevLoginInfo => ({
      ...prevLoginInfo,
      loginButton: false,
      loginForm: true
    }))
  }

  return (
    <>
      <div className='container-fluid text-center'>
        {loginInfo.loginButton && 
          <button id='loginBtn' className='btn btn-primary' onClick={changeLoginInfo}>Logowanie</button>
        }

        {loginInfo.loginForm &&
          <LoginForm setLoginInfo={setLoginInfo} />
        }
      </div>
    </>
  )
}

export default App
