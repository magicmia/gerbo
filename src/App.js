import Home from "./screens/Home";
import Gallery from "./screens/Gallery";
import { Navbar } from "responsive-navbar-react";
import "responsive-navbar-react/dist/index.css";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
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
    ],
    logo: {
      text: "KISMIA",
    },
    style: {
      barStyles: {
        background: "#444",
      },
      sidebarStyles: {
        background: "#222",
        buttonColor: "white",
      },
    },
  };
  return (
    <div className="home">
      <Navbar {...props} />
      <Router className="App">
        <Routes>
          <Route path="/" element={Home} />
          <Route path="/gallery" element={Gallery} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
