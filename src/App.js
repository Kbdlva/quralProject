import './styles/App.css';
import React from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./Components/AppRouter";
import Header from "./Components/UI/Header/Header";
import Footer from "./Components/UI/Footer/Footer";

function App() {
  return (
      <BrowserRouter>
          <div
              style={{
                  display:"flex",
                  justifyContent:"center",
                  flexDirection:"column",
                  width:"100%"}}
          >
              <Header/>
              <AppRouter/>
              <Footer/>
          </div>

      </BrowserRouter>
  );
}

export default App;
