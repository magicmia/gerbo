import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Gallery from "./screens/Gallery";
import Info from "./screens/Info";
import Event from "./screens/Event";
import { Navbar } from "responsive-navbar-react";
import "responsive-navbar-react/dist/index.css";
import "react-slideshow-image/dist/styles.css";
import BasicModal from "./assets/modal";
import SimpleImageSlider from "react-simple-image-slider";
import ImageSlider from "./assets/ImageSlider";
import {SliderData} from "./assets/SliderData";
import "./App.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import Cookies from "js-cookie";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqf9YtrHtwsM4N-y41ZAJ_aomcYRN81N4",
  authDomain: "gerbo-e7a00.firebaseapp.com",
  projectId: "gerbo-e7a00",
  storageBucket: "gerbo-e7a00.appspot.com",
  messagingSenderId: "50475205455",
  appId: "1:50475205455:web:c7e52ca5941b24bb37bb3a",
  measurementId: "G-4V8M9BE09S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

const App = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [popup, setPopup] = React.useState({});
  useEffect(() => {
    const asyncFunciton = async () => {
      await getDocs(collection(db, "popup")).then((querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setIsOpen(newData[0].showPopup);
        setPopup(newData[0]);
        Cookies.set("popup", "true");
      });
    };
    const cookie = Cookies.get("popup");
    if (!cookie) asyncFunciton();
  }, []);
  const images = [
    "https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8MTYlM0E5fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
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
        link: "#contact",
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
      <BasicModal popup={popup} modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />

      <Navbar {...props} />
      <div class="bg-white mt-100">
        <SimpleImageSlider
          width={"100%"}
          height={504}
          images={images}
          showBullets={true}
          showNavs={true}
        />
      </div>
      <Routes>
        <Route path="/" element={<Home modalIsOpen={modalIsOpen} />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/info" element={<Info />} />
        <Route path="/event" element={<Event />} />
      </Routes>
      <ImageSlider slides={SliderData} />

      <div
        id={"contact"}
        className="bg-black flex flex-row w-full bottom-5 pb-5"
      >
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
