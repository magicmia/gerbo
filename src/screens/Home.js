import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import hu from "date-fns/locale/hu";

import "react-slideshow-image/dist/styles.css";
import "react-dater/dist/index.css";
import "react-datepicker/dist/react-datepicker.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../App";

const Home = (props) => {
  registerLocale("hu", hu);

  const navigate = useNavigate();
  const [message] = useState("...loading");
  const [startDate, setStartDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const asyncFunciton = async () => {
      await getDocs(collection(db, "events")).then((querySnapshot) => {
        const newData = querySnapshot.docs.map((doc, index) => ({
          ...doc.data(),
          id: index+1,
        }));
        setEvents(newData);
      });
    };
    asyncFunciton();
  }, []);


  const responsiveSettings = [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 300,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];

  return (
    <div>
      <h1 className="my-5 uppercase font-medium text-xl p-2">
        Aktuális események
      </h1>
      <div className="bg-white mt-100">
        <div className="w-auto">
          <Slide
            slidesToScroll={events.length}
            arrows={props.modalIsOpen || events.length === 0 ? false : true}
            responsive={responsiveSettings}
          >
            {events.map((element, index) => {            
              return (
                <div onClick={() => navigate("/event")} className="ml-5 w-5/6">
                  <img key={index} src={element.img} alt="" />
                  <h1>{element.title}</h1>
                  <p>{element.description}</p>
                  
                </div>
              );
            })}
          </Slide>
        </div>
      </div>
      <DatePicker
        showMonthDropdown
        locale="hu"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />

      {events
        .filter((e) => new Date(e.date) > startDate)
        .map((element, index) => (
          <div onClick={() => navigate("/event")} className="ml-5 w-5/6 flex">
            <p>{element.date}</p>
            <h1>{element.title}</h1>
            <p>{element.description}</p>
          </div>
        ))}
    </div>
  );
};

export default Home;
