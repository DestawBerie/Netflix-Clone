import axios from "./axios";
// import { truncate } from "fs";
import React, { useEffect, useState } from "react";
import "./Banner.css";
import requests from "./requests";
function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      //   console.log(request);
      setMovie(
        request?.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      //   console.log(request.data.results);
      return request;
    }
    fetchData();
  }, []); //dependancies

  console.log(movie);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <hl className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </hl>
        <div className="banner_buttons">
          <button className="banner_button">play</button>
          <button className="banner_button">My list</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
        <div className="banner_fadeBottom" />
      </div>
    </header>
  );
}
export default Banner;
