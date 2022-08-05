import React, { useState } from "react";
import Axios from "axios";
import Navbar from "./Navbar";


export const Home: React.FC = () => {
  const [inputCountry, setInputCountry] = useState<any>();
  const [data, setData] = useState([]);

  function GetUniverities(e: any) {
    const url = `http://universities.hipolabs.com/search?country=${inputCountry}`;
    Axios.get(url).then((response) => setData(response.data));
    e.preventDefault();
  }
  
  return (
    <div>
      <Navbar />
    </div>
  );
};
