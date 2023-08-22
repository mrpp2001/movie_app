
import React from "react";

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <div className="movie" key={imdbID}>
      {/* Display the movie's release year */}
      <div>
        <p>{Year}</p>
      </div>

      {/* Display the movie's poster */}
      <div>
        <img
          src={
            Poster !== "N/A"
              ? Poster
              : "https://via.placeholder.com/400"
          }
          alt={Title}
        />
      </div>

      {/* Display the movie's type and title */}
      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;



// ------------------------------------------------------------***********************************************************

// import React from "react";

// const MovieCard = ({  movie : {imdbID, Year,Poster,Title,Type} }) => {
//   return (
//     <div className="movie" key ={imdbID}>
//       <div>
//         <p>{Year}</p>
//       </div>

//       <div>
//         <img
//           src={
//             Poster !== "N/A"
//               ? Poster
//               : "https://via.placeholder.com/400"
//           }
//           alt={Title}
//         />
//       </div>

//       <div>
//         <span>{Type}</span>
//         <h3>{Title}</h3>
//       </div>
//     </div>
//   );
// };

// export default MovieCard;