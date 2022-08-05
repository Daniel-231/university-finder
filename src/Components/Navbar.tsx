import React, { useState } from "react";
import Axios from "axios";
import { FaSearch } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Navbar: React.FC = () => {
  const [inputCountry, setInputCountry] = useState<any>();
  const [data, setData] = useState([]);
  
  function GetUniverities(e: any) {
    const url = `http://universities.hipolabs.com/search?country=${inputCountry}`;
    Axios.get(url).then((response) => setData(response.data));
    e.preventDefault();
  }

  return (
    <div>
      <nav className="navbar">
        <a id="title" href="/">
        University Finder
        </a>
        <div className="searchBar">
          <Form.Control
            type="text"
            defaultValue={inputCountry}
            placeholder="Enter Country.."
            onChange={(e: any) => {
              setInputCountry(e.target.value);
            }}
          />
        </div>
        <Button className="button" variant="dark" onClick={GetUniverities}>
          {<FaSearch />}
        </Button>
      </nav>

      <div>
        {data.map((e: any, i: number) => {
          i++;
          return (
            <div className="text" key={e.name}>
              {i}. { e.name + ": "}
              <a href={e.web_pages}>{e.web_pages}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
