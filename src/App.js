import React from 'react';
import Home from './Components/Home/home';
import About from './Components/About/about';
import Nav from './Components/Navigation/nav';
import Sidebar from './Components/Sidebar/Sidebar';
import Product from './Components/Products/product';
import './App.css';
import 'tachyons'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Sidebar />
    <Nav />
     <Routes>

          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About />} />
           <Route exact path='/product' element={<Product />} />
          

         
      </Routes>
    </BrowserRouter>


    
</div>
    
  );
}

export default App;
