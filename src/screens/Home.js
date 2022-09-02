import React, { useState, useEffect } from "react";

const Home = () => {
  const [message, setMessage] = useState("...loading");

  useEffect(() => {
    async function fetchData() {
      //alert("HELLO");
    }
    fetchData();
  });

  return (
    <div className="bg-white mt-100 flex-1">
       <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
  );
};

export default Home