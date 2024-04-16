// App.js

import { useState } from 'react';
import './App.css';
import Footer from './components/footer/footer';
import Header from "./components/header/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SectionRouter from './components/section/sectionRouter';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        {/* <Routes> */}
          <Header/>
          <SectionRouter/>
          <Footer/>
        {/* </Routes> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
