import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import hu from "date-fns/locale/hu";
import ImageSlider from "../assets/ImageSlider";
import "react-slideshow-image/dist/styles.css";
import "react-dater/dist/index.css";
import "react-datepicker/dist/react-datepicker.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../App";

const Home = (props) => {
  registerLocale("hu", hu);

  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const asyncFunction = async () => {
      await getDocs(collection(db, "events")).then((querySnapshot) => {
        const newData = querySnapshot.docs.map((doc, index) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setEvents([...newData]);
      });
    };
    asyncFunction();
  }, []);

  return (
    <div>
      <h1 className="my-5 uppercase font-medium text-xl p-2">
        Aktuális események
      </h1>
      <div className="flex overflow-x-auto">
        {events.map((element, index) => {
          return (
            <div
              onClick={() => navigate(`/event?id=${element.id}`)}
              class="ml-5"
            >
              <img class="w-full" key={index} src={element.img.src} alt="" />
              <h1>{element.title}</h1>
              <p>{element.description}</p>
            </div>
          );
        })}
      </div>
      <ImageSlider />
      <DatePicker
        className="bg-black text-white rounded-md"
        showMonthDropdown
        locale="hu"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />

      {events
        //.filter((e) => new Date(e.date) > startDate)
        .map((element, index) => (
          <div
            onClick={() => navigate("/event")}
            className=" px-5 w-full flex justify-between border-b-2"
          >
            <div><h1>16</h1><p>január</p></div>
            <div>
              <h1 className="text-xl font-bold">{element.title}</h1>
              <p className="">{element.description}</p>{" "}
            </div>
            <div>
              <h1>04.52</h1> <p>Tovább...</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Home;
