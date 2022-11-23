import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Gallery from "./screens/Gallery";
import Info from "./screens/Info";
import Event from "./screens/Event";
import { Navbar } from "responsive-navbar-react";
import "responsive-navbar-react/dist/index.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Picker from "react-month-picker";
import BasicModal from "./assets/modal";

import "./App.css";

const App = () => {
  const [modalIsOpen, setIsOpen] = React.useState(true);

  const images = [
    "https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8MTYlM0E5fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  ];
  const props = {
    items: [
      {
        text: "ESEMÉNYEK",
        link: "/",
      },
      {
        text: "INFO",
        link: "/info",
      },
      {
        text: "GALÉRIA",
        link: "/gallery",
      },
      {
        text: "KAPCSOLAT",
      },
    ],
    logo: {
      text: "GERBO PRODUKCIÓ",
      link: "/",
    },
    style: {
      barStyles: {
        background: "#000000",
      },
      sidebarStyles: {
        background: "#000000",
        buttonColor: "white",
      },
    },
  };

  return (
    <Router>
      <BasicModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />

      <Navbar {...props} />
      <div class="bg-white mt-100">
        <div class="w-auto">
          <Slide arrows={!modalIsOpen}>
            {images.map((image, index) => (
              <img class="w-screen h-5/6" key={index} src={image} alt="" />
            ))}
          </Slide>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home modalIsOpen={modalIsOpen} />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/info" element={<Info />} />
        <Route path="/event" element={<Event />} />
      </Routes>
      <div className="bg-black flex flex-row w-full bottom-5 pb-5">
        <div className="mt-5 ml-5 flex-1 text-white">
          <h1 className="my-5 text-xl">KAPCSOLAT</h1>
          <h1 className="mb-3">Gerbo Produkció Kulturális Szolgáltató Kft.</h1>
          <h1 className="mb-3">00 36 70/315 94 98</h1>
          <a href="mailto:info@gerbo.hu" className="mb-3">
            info@gerbo.hu
          </a>
          <br />
          <a href="">Szerződési feltételek</a>
        </div>
        <div className="bg-black flex flex-row justify-center align-middle mr-5 mt-20 p-2">
          <li className="h-[60px] w-[60px] ml-5">
            <a href="https://musicalinfo.hu/">
              <img src="https://yt3.ggpht.com/ARsX5EPf1b8FcjNrwP6pwX0Nrba2zL1RPBpwwVM-5H85sxMwPuDBDXXTHMo1asvcPxBi6WWenWU=s900-c-k-c0x00ffffff-no-rj" />
            </a>
          </li>
          <li className="h-[60px] w-[60px] ml-5">
            <a href="https://www.jegy.hu/">
              <img src="https://www.jegy.hu/resources/img/jegyhu_logo_square_300.jpg" />
            </a>
          </li>
          <li className="h-[60px] w-[60px] ml-5">
            <a href="https://www.facebook.com/gerbo.hu">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/240px-Facebook_f_logo_%282019%29.svg.png" />
            </a>
          </li>
        </div>
      </div>
    </Router>
  );
};

export default App;
