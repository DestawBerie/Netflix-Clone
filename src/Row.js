import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "./axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
// import { url } from "inspector";
const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, tool, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request);

      setMovies(request.data.results);
      console.log(movies);

      console.log(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]); //dependancies

  var opts = {
    // width: "100%",
    height: "420",
    playerVars: {
      autoplay: 1,
    },
  };

  //somthing that added today
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);

          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  //up to this from today
  return (
    <div className="row">
      <h1>{title}.</h1>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            // src={`${base_url}${movie.poster_path}`}
            // alt={movie.name} this one is post all titles/posters on images
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>

      {/* to make a part taht used to play the trailer below the video clicked */}
      <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
}

export default Row;
