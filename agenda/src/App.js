import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './Components/Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
      <BrowserRouter basename='/'>
      <Routes>
         {/* Default Routes */}
         <Route path="/" exact element={<LandingPage />} />
         </Routes>
        <Footer />
      </BrowserRouter>
      </>
  )}
}

export default App;
