import React, {useContext} from 'react';
import {AuthContext} from "../context";
import PostService from "../API/PostService";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const login = event => {
        event.preventDefault();
        let login = document.getElementById('login').value;
        let password = document.getElementById('password').value;
        PostService.pushLogin(login, password)
            .then(response => {
                if (response.status === 200) {  // Assuming the API returns { success: true/false }
                    setIsAuth(true);
                    localStorage.setItem('auth', 'true');
                    alert("Вход выполнен успешно!");
                    console.log("Login successful:", response);
                } else {
                    setIsAuth(false);  // Ensure it stays false in case of failure
                    alert(`Ошибка входа: ${response.data?.message || "Попробуйте снова"}`);
                    console.error("Login failed:", response.data);
                }
            })
    }
    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={login}>
                <input placeholder={"enter login"} type={"text"} id={"login"}/>
                <input placeholder={"enter password"} type={"password"} id={"password"}/>
                <button>
                    Enter
                </button>
            </form>
        </div>
    );
};

export default Login;