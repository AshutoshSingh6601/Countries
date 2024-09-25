import React, { useEffect, useState } from "react";
import Header from "./Header";
import { FaArrowLeftLong } from "react-icons/fa6";

import "../assets/CountryDetail.css";
import { Link, useLocation, useParams } from "react-router-dom";
import ShimmerForCardDetail from "./ShimmerForCardDetail";
import { useTheme } from "../Hook/useTheme";

const CountryDetails = () => {

  const [mode, setMode] = useTheme()

  // const CountryName = new URLSearchParams(location.search).get('name')

  const params = useParams();
  // console.log(params)

  let CountryName = params.countryDetail;
  const [selectedCountry, setSelectedCountry] = useState({});

  const location = useLocation()
  console.log(location)

  function countryFunction(data){
    setSelectedCountry({ data, borders: [] });
        
    if(!data.borders){
      // console.log("no record")
    }
    else {
      Promise.all(
        data.borders.map((border) => {
          fetch(`https://restcountries.com/v3.1/alpha/${border}`)
            .then((res) => res.json())
            .then(([data]) => {
              setSelectedCountry((prev) => ({
                ...prev,
                borders: [...prev.borders, data.name.common],
              }));
            });
        })
      );
    }
  }

  const CountryDetail = () => {

    if(location.state){
      countryFunction(location.state)
    }
    else{
      fetch(`https://restcountries.com/v3.1/name/${CountryName}`)
      .then((res) => res.json())
      .then(([data]) => {
       
        countryFunction(data)

      });
    }
    
  };

  useEffect(() => {
    CountryDetail();
  }, [CountryName]);

  // console.log(selectedCountry.data);
  // console.log(selectedCountry, "=====");

  if(!selectedCountry.data){
    return <ShimmerForCardDetail />
  }

  return (
    <div
      style={
        mode
          ? { background: "rgb(15 23 42)", color: "white" }
          : { background: "white", color: "black" }
      }
    >
      <Header mode={mode} setMode={setMode} />
      {/* <h1>Hello</h1> */}
      {selectedCountry.data && (
        <div className="CountryContainer">
          {/* history.go(-1) */}
          <button className="backBtn" onClick={() => history.back()} style={
        mode
          ? { background: "rgb(15 23 42)", color: "white" }
          : { background: "white", color: "black" }
      }>
            {" "}
            <FaArrowLeftLong /> Back
          </button>
          <div className="MainCountryDetail">
            <div className="LeftCountryDetail">
              <img src={selectedCountry.data.flags.svg} alt="" />
            </div>
            <div className="RightCountryDetail">
              <h1>{selectedCountry.data.name.common}</h1>
              <p>
                {" "}
                <span> Native Name: </span>{" "}
                {Object.keys(selectedCountry.data.name.nativeName).map(
                  (key) =>
                    selectedCountry.data.name.nativeName[key].common +
                    (Object.keys(selectedCountry.data.name.nativeName).length >
                    1
                      ? ", "
                      : "")
                )}{" "}
              </p>
              <p>
                {" "}
                <span> Population: </span>{" "}
                {selectedCountry.data.population.toLocaleString("en-IN")}{" "}
              </p>
              <p>
                {" "}
                <span> Region: </span> {selectedCountry.data.region}{" "}
              </p>
              <p>
                {" "}
                <span> Sub Region: </span> {selectedCountry.data.subregion}{" "}
              </p>
              <p>
                {" "}
                <span> Capital: </span>{" "}
                {Object.values(selectedCountry.data.capital)}{" "}
              </p>
              <p>
                {" "}
                <span> Top Level Domain: </span>{" "}
                {Object.values(selectedCountry.data.tld)}{" "}
              </p>
              <p>
                {" "}
                <span> Currencies: </span>{" "}
                {Object.values(selectedCountry.data.currencies)[0].symbol}{" "}
              </p>
              <p>
                {" "}
                <span> Languages: </span>{" "}
                {Object.keys(selectedCountry.data.languages)
                  .map((lang) => selectedCountry.data.languages[lang])
                  .join(", ")}{" "}
              </p>
              <p>
                {" "}
                <span> Border Countries: </span>{" "}
                {selectedCountry.borders.map((border) => (
                  <Link key={border} className="bordersName" to={`/${border}`} style={
                    mode
                      ? { background: "rgb(15 23 42)", color: "white" }
                      : { background: "white", color: "black" }
                  }>
                    {border}
                  </Link>
                ))}{" "}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
