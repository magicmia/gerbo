import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../App";

import Line from "../assets/Line";

export default function Info() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const asyncFunction = async () => {
      await getDocs(collection(db, "info")).then((querySnapshot) => {
        const newData = querySnapshot.docs.map((doc, index) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setInfo(newData);
      });
    };
    asyncFunction();
  }, []);
  console.log(info);
  
  return (
    <div>
      <Line />
      <h1 className="my-5 mx-5 uppercase font-medium text-xl">{info?.[0]?.title}</h1>
      <div dangerouslySetInnerHTML={{__html: info?.[0]?.body}} className="prose prose-lg"
></div>
    </div>
  );
}
