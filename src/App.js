import './styles/App.css';
import React, {useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./Components/AppRouter";
import Header from "./Components/UI/Header/Header";
import Footer from "./Components/UI/Footer/Footer";
import Service from "./Service";
import {AuthContext} from "./context";

function App() {
    const [isAuth, setIsAuth] = useState(false);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }

    useEffect(() => {
        if (localStorage.getItem('auth')){
            setIsAuth(true)
        }
    }, [])

  return (
      <AuthContext.Provider value={{
          isAuth,
          setIsAuth,
      }}>
          <BrowserRouter>
              <Header/>
              <Service/>
              <button onClick={logout}>
                  Log out
              </button>
              <AppRouter/>
              <Footer/>
          </BrowserRouter>
      </AuthContext.Provider>

  );
}

export default App;
