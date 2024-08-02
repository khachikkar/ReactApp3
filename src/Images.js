import React from "react";
import "./Images.css";
import { useState, useEffect } from "react";
import GetStarted from "./Components/GetStart/GetStart"
const key = "e-2M5SW_iMn3Ky4P0eJ5qd88qw30QLrBTas9xQ9VmP4";

function Images() {
  const [res, setRes] = useState("");
  const [searchval, SetSearchval] = useState("");
  const [data, setData] = useState([]);
  const [rres, setRres] = useState("Search for Inspiration");

  const handle = () => {
    SetSearchval(res);
    setRes("");
  };

  useEffect(() => {
    if (searchval) {
      fetch(
        `https://api.unsplash.com/search/photos/?query=${searchval}&client_id=${key}`
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data.results);
          setRres("");
        });
    }
  }, [searchval]);

  return (
    <section className="images-sec">
      <div className="ads">
        <h1>Get Inspirations Here</h1>
      </div>

      <div className="i-search">
        <input
          onChange={(e) => {
            setRes(e.target.value);
          }}
          className="Input"
          value={res}
          placeholder="Seach any image that you wanna"
        />
        <button onClick={handle} className="primaryButton">
          Search
        </button>
      </div>

      <h3>{searchval}</h3>

      <div className="i-results">
        <span>{rres}</span>
        {data && data.map((item) => {
          return <img className="i-img" key={item.id} src={item.urls.full} />;
        })}
      </div>

      <GetStarted />
    </section>
  );
}

export default Images;
