import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./Components/Hero/Hero";
import Nav from "./Components/Nav/Nav";
import Companies from "./Components/Companies/Companies";
import ProductList from "./Components/ProductList/ProductList";
import Value from "./Components/Value/Value";
import Contact from "./Components/Contact/Contact";
import GetStarted from "./Components/GetStart/GetStart";
import Footer from "./Footer/Footer";
import Images from "./Images";// Correct path to Images
import Gift from "./Gift";
import Paris from "./Paris";
import TodoItem from "./Pages/Todo/TodoApp";
import Calculator from "./Pages/Calculator/Calculator";
function App() {
  return (
    
      <div className="App">
        <Nav />
        <Routes>
          <Route path="*" element={
            <>
              <Hero />
              <Companies />
              <ProductList />
              <Value />
              <Contact />
              <GetStarted />
            </>
          } />
          <Route path="/src/Images" element={<Images />} />
          <Route path="/src/Gift" element={<Gift />} />
          <Route path="/src/Paris" element={<Paris />} />
          <Route path="/src/Pages/Todo/TodoApp" element={<TodoItem />}/>
          <Route path="/src/Pages/Calculator/Calculator" element={<Calculator />}/>
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
