import React from "react";
import Banner from "./Banner";
import Nav from "./Nav";
import requests from "./requests";
import "./App.css";
import Row from "./Row";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        tool="Figma"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row
        title="Trending Now"
        tool="Figma"
        fetchUrl={requests.fetchTrending}
      />
      <Row
        title="Top Rated"
        tool="Figma"
        fetchUrl={requests.fetchTopRatedMovies}
      />
      <Row
        title="Action Movies"
        tool="Figma"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        title="Comedy Movies"
        tool="Figma"
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row
        title="Horror Movies"
        tool="Figma"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Row
        title="Romance Movies"
        tool="Figma"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Row
        title="Documentary Movies"
        tool="Figma"
        fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  );
}

export default App;
