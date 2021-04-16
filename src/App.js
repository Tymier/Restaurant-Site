import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero";
import Products from "./components/Products";
import {productData, productData2} from './components/Products/data';
import Feature from './components/Feature';


function App() {
  return (
    <Router>
    <GlobalStyle />
    <Hero />
    <Products heading='Feel Free to Choose' data=
    {productData} />
    <Feature />
    <Products heading='Desserts' data=
    {productData2} />
    </Router>
  );
} 

export default App;
