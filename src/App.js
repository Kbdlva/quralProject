import './styles/App.css';
import React from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./Components/AppRouter";
import Header from "./Components/UI/Header/Header";
import Footer from "./Components/UI/Footer/Footer";
import Service from "./Service";

function App() {
  return (
      <BrowserRouter>
        <Header/>
          <Service/>
        <AppRouter/>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
