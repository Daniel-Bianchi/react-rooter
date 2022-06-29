import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import HTMLDefinition from './components/HTMLDefinition';
import CSSDefinition from './components/CSSDefinition';
import JSDefinition from './components/JSDefinition';



function App() {
  return (

    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path= "/components/HTMLDefinition" element={<HTMLDefinition/>}/>
          <Route path= "/components/CSSDefinition" element={<CSSDefinition/>}/>
          <Route path= "/components/JSDefinition" element={<JSDefinition/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
