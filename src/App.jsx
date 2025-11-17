import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import LoginForm from './components/LoginForm';
import MainPage from './components/MainPage';

function App() {
  const [loginInfo, setLoginInfo] = useState({loginButton: true, loginForm: false, isLoggedIn: false});
  const [cars, setCars] = useState([
    {photo: "https://img2.carmax.com/assets/mmy-toyota-corolla-2016/image/1.jpg?width=800&height=600", name: "Toyota Corolla", year: "2016", info: "Benzyna, 120k km, regularne serwisy.", price: 38000, seller: "Dealer_A"},
    {photo: "https://img2.carmax.com/assets/mmy-bmw-320-2014/image/1.jpg?width=800&height=600", name: "BMW 320i", year: "2014", info: "Auto garażowe, 200k km, klima, autofelgi.", price: 42000, seller: "AutoSalon"},
    {photo: "https://www.instrukcjaobslugipdf.pl/thumbs/products/l/1098022-fiat-500-2018.webp", name: "Fiat 500", year: "2018", info: "Mały miejski, ekonomiczny, 60k km.", price: 35000, seller: "Prywatny"}
  ])

  function changeLoginInfo() {
    setLoginInfo(prevLoginInfo => ({
      ...prevLoginInfo,
      loginButton: false,
      loginForm: true
    }))
  }

  return (
    <>
      <div className='container-fluid d-flex'>
        {loginInfo.loginButton && 
          <button id='loginBtn' className='btn btn-primary' onClick={changeLoginInfo}>Logowanie</button>
        }

        {loginInfo.loginForm &&
          <LoginForm setLoginInfo={setLoginInfo} />
        }

        {loginInfo.isLoggedIn &&
          <MainPage cars={cars} setCars={setCars} />
        }

      </div>
    </>
  )
}

export default App
