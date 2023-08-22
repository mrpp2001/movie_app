import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard"; // Importing the MovieCard component.
import searchIcon from "./search.svg"; // Importing the search icon image.
import "./App.css"; // Importing the CSS styles for the App component.

const API_URL = "https://www.omdbapi.com?apikey=d77ba6f1"; // API URL for OMDB API.

const movie1 = {
  // Sample movie data.
  Title: "Italian Spiderman",
  Year: "2007",
  imdbID: "tt2705436",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg",
};

const App = () => {
  // State variables to store movie data and the search term.
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch movies with "Spiderman" as the initial search term when the component mounts.
  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  // Function to fetch movies based on the provided title.
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search); // Update the movies state with the fetched data.
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        {/* Input field for searching movies */}
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* Search icon that triggers the movie search */}
        <img
          src={searchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {/* Conditional rendering based on the movies state */}
      {movies?.length > 0 ? (
        // If movies are available, render the movie cards.
        <div className="container">
          {movies.map((movie) => (
            // Render a MovieCard component for each movie in the movies array.
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        // If no movies are found, display a message.
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App; // Export the App component.

// ----------------------------------------------------------**************************************************************************

// import React, { useEffect, useState } from "react";
// import MovieCard from "./MovieCard";
// import searchIcon from "./search.svg"
// import "./App.css";

// const API_URL = "https://www.omdbapi.com?apikey=d77ba6f1";

// const movie1 = {
//   Title: "Italian Spiderman",
//   Year: "2007",
//   imdbID: "tt2705436",
//   Type: "movie",
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg",
// };

// const App = () => {
//   const [movies, setMovies] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     searchMovies("Spiderman");
//   }, []);

//   const searchMovies = async (title) => {
//     const response = await fetch(`${API_URL}&s=${title}`);
//     const data = await response.json();

//     setMovies(data.Search);
//   };

//   return (
//     <div className="app">
//       <h1>MovieLand</h1>

//       <div className="search">
//         <input
//           placeholder="Search for movies"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <img
//           src={searchIcon}
//           alt="search"
//           onClick={() => searchMovies(searchTerm)}
//         />
//       </div>

//       {movies?.length > 0 ? (
//         <div className="container">
//           {movies.map((movie) => (
//             <MovieCard movie={movie} />
//           ))}
//         </div>
//       ) : (
//         <div className="empty">
//           <h2>No movies found</h2>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;




