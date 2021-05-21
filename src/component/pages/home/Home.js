import React from "react";
import MainPageBanner from "../../common/main-page-banner";
import About from "./About";
import Experiance from './Experiance'
import Latestwork from "./Latestwork";
import Services from './Services';
import Popup from "../../common/popup";

 import Contact from './Contact';
import "./style.css";



export default function Home() {
   
  return (
    <>
      {/* {popup && <Popup />} */}

      <MainPageBanner />
      <About />
      <Experiance />
      
        <Latestwork />

      <Services />
      <Contact />
    </>
  );
}
