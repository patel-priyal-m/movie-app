import { useEffect, useState } from "react";

import "./App.css";
import Search from "./components/Search";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.TMDB_API_READ_ACCESS_TOKEN;
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: `application/json`,
    Authorization: `Bearer ${API_KEY}`,
  },
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/discover/movie?include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
        API_OPTIONS
      );

      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      setErrorMessage("An error occurred while fetching the movies.");
      console.error(error);
      setErrorMessage("Error fetching movies, try again later.");
    }
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <main>
      <div className="pattern">
        <div className="wrapper">
          <header>
            <img src="./hero.png" alt="HeroImage" />
            <h1>
              Find <span className="text-gradient">Movies</span> You'll Enjoy
              Without the Hassle
            </h1>
          </header>
        </div>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <section className="all-movies">
          <h2>All Movies</h2>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </section>
      </div>
    </main>
  );
};

export default App;
