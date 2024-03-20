import { useState } from "react";
import "./Country.css";
export default function Country({country,handleVisitedCountry}) {
    // console.log(country)
    const [visited,setVisited]=useState(false)
    const handleVisited=()=>{
        setVisited(!visited)
    }

  const { continents, flags, coatOfArms, area } = country
  //   console.log(Country);
  return (
    <div className={`Country-grid ${visited && 'visited'}`}>
      <div className={"country-container"}>
        <h2>{continents} </h2>
        <p>{area} sqm</p>
        <img style={{display:visited ?'none':''}} src={coatOfArms.png} alt="" />
        <img style={{borderRadius:visited ?"16px":''}} src={flags.png} alt="" />
        <div>
          <button onClick={handleVisited}>Visited</button>
          <button onClick={()=>handleVisitedCountry(flags)}>Add</button><br />
          {visited && 'I visited this Country'}
        </div>
      </div>
    </div>
  );
}
