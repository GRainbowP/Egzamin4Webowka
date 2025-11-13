

function LoginForm({setLoginInfo}) {
    function updateLoginState() {
        setLoginInfo(prevLoginInfo => ({
            ...prevLoginInfo,
            loginForm: false,
            isLoggedIn: true
        }))
    }

    return (
        <div className="container">
            <h2><b>Pseudotomoto - Logowanie</b></h2>
            <input className="form-control mb-3" type="text" placeholder="Nazwa użytkownika" />
            <input className="form-control mb-3" type="password" placeholder="Hasło" />
            <button className="btn btn-outline-success" onClick={updateLoginState}>Zaloguj się</button>
        </div>
    )
}

export default LoginForm