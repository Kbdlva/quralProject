import './styles/App.css';
import React, {useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./Components/AppRouter";
import Header from "./Components/UI/Header/Header";
import Footer from "./Components/UI/Footer/Footer";

function App() {
    const [lang, setLang] = useState('en');

    useEffect(() => {
        const savedLang = localStorage.getItem('lang');
        if (savedLang) setLang(savedLang);
    }, []);

    const changeLanguage = (lang) => {
        localStorage.setItem('lang', lang);
        setLang(lang);
    };

  return (
      <BrowserRouter>
          <div
              style={{
                  display:"flex",
                  justifyContent:"center",
                  flexDirection:"column",
                  width:"100%"}}
          >
              <Header
                  changeLanguage={changeLanguage}
                  selectedLanguage={lang}
              />
              <AppRouter/>
              <Footer/>
          </div>

      </BrowserRouter>
  );
}

export default App;
