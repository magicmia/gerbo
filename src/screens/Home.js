import React, { useState, useEffect } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Event from "./Event";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [message, setMessage] = useState("...loading");
  const images = [
    "https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8MTYlM0E5fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  ];
  const events = [
    {
      img: "https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8MTYlM0E5fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      title: "Mazsola",
      description: "Mazsola",
      id: 1,
    },
    {
      img: "https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8MTYlM0E5fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      title: "Mazsola",
      description: "Mazsola",
      id: 2,
    },
    {
      img: "https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8MTYlM0E5fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      title: "Mazsola",
      description: "Mazsola",
      id: 3,
    },
    {
      img: "https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8MTYlM0E5fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      title: "Mazsola",
      description: "Mazsola",
      id: 4,
    },
    {
      img: "https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8MTYlM0E5fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      title: "Mazsola",
      description: "Mazsola",
      id: 5,
    },
  ];
  function handleClick() {}

  useEffect(() => {
    async function fetchData() {}
    fetchData();
  });

  const responsiveSettings = [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ];

  return (
    <div>
      <h1 className="my-5">Aktuális események</h1>
      <div className="bg-white mt-100">
        <div className="w-auto">
          <Slide
            slidesToScroll={events.id}
            indicators={true}
            responsive={responsiveSettings}
          >
            {events.map((element, index) => (
              <div onClick={() => navigate("/event")} className="ml-5 w-5/6">
                <img key={index} src={element.img} alt="" />
                <h1>{element.title}</h1>
                <p>{element.description}</p>
              </div>
            ))}
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Home;
