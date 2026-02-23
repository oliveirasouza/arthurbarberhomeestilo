import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Contact from "./components/Contact";


import "./App.css";


/**
 * Componente principal da aplicação
 */
export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Pricing />
      <Gallery />
      <About />
      <Footer />
      <Contact />
    </>
  );
}