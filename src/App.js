import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./screens/Home";
import Gallery from "./screens/Gallery";
import Contact from "./screens/Contact";
import Info from "./screens/Info";
import Event from "./screens/Event";
import { Navbar } from "responsive-navbar-react";
import "responsive-navbar-react/dist/index.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./App.css";


const App = () => {
  const images = [
    "https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8MTYlM0E5fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  ];
  const props = {
    items: [
      {
        text: "Események",
        link: "/",
      },
      {
        text: "Galéria",
        link: "/gallery",
      },
      {
        text: "Információk",
        link: "/info",
      },
      {
        text: "Kapcsolat",
        link: "/contact",
      },
    ],
    logo: {
      text: "KISMIA",
    },
    style: {
      barStyles: {
        background: "#000000",
      },
      sidebarStyles: {
        background: "#222",
        buttonColor: "white",
      },
    },
  };
  return (
    <Router>
      <Navbar {...props} />
      <div className="bg-white mt-100">
        <div className="w-auto bg-green ">
          <Slide>
            {images.map((image, index) => (
              <img className="w-screen" key={index} src={image} alt="" />
            ))}
          </Slide>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/info" element={<Info />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/event" element={<Event />} />
      </Routes>
      <div className="bg-black flex flex-row w-full bottom-0">
        <div className='mt-5 ml-5 flex-1 text-white'>
          <h1 className="my-5 text-xl">KAPCSOLAT</h1>
          <h1 className='mb-3'>Gerbo Produkció Kulturális Szolgáltató Kft.</h1>
          <h1 className='mb-3'>00 36 70/315 94 98</h1>
          <h1 className='mb-3'>info@gerbo.hu</h1>
          <Link to={''} >Szerződési feltételek</Link>
        </div>
        <div
          style={{ color: "white" }}
          className="bg-black flex-1" class='place-self-end mr-5 mb-5'
        >
          oké, már jobb oldalon van, de mi a szarért nem a helyén?
        </div>
      </div>
    </Router>
  );
};

export default App;
