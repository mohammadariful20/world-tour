import { useEffect, useState } from "react";
import "./Countrys.css";
import Country from "./Country.jsx/Country";

export default function Countrys() {
  const [countrys, setCountry] = useState([]);
  const [visitedCountrys, setVisitedCountrys] = useState([]);

  const handleVisitedCountry = (countrys) => {
    console.log(countrys);
    setVisitedCountrys([...visitedCountrys, countrys]);
  };

  // console.log(countrys)
  useEffect(() => {
    fetch("https:restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);
  return (
    <div>
      <h2>See All Country {countrys.length} </h2>
      <div>
        <h2>Visited Countyr List</h2>
        <div>
          {visitedCountrys.map((countryFlage) => {
            return (
              <ol>
                <li>
                  <img className="flage-list" src={countryFlage.png}  alt="" />
                </li>
              </ol>
            );
          })}
        </div>
      </div>
      <div className="countey-container">
        {countrys.map((country) => {
          return (
            <Country  key={countrys.cca2}
            country={country}
            handleVisitedCountry={handleVisitedCountry}></Country>
          );
        })}
      </div>
    </div>
  );
}
