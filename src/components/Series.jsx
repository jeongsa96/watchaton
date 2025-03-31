import { useState } from "react";
import Bookmark from "./BookmarkIcon";

function Series() {
  const [APIData, setAPIData] = useState([]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzBiYTZlMzBhYThhNmUwNDNkODdiYWI0MGRkOWIxYSIsIm5iZiI6MTc0MjQ2Njk2MC4yNDYsInN1YiI6IjY3ZGJlZjkwMmRiYTY2ODYyNTdmOWM3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MZK5EoLWULZo32YiVKUugo4hCQfRl4kUyovGl6XqJtE",
    },
  };

  fetch("https://api.themoviedb.org/3/trending/tv/day?language=en-US", options)
    .then((res) => res.json())
    .then((res) => setAPIData(res.results))
    .catch((err) => console.error(err));
  return (
    <div className="flex space-x-1 overflow-x-auto px-4 pt-1 lg:space-x-3">
      {APIData.map((series, index) => {
        if (series.backdrop_path != null) {
          return (
            <div
              className="card card-xs bg-base-100 w-48 flex-shrink-0 shadow-sm transition-all duration-300 hover:-translate-y-1 lg:w-64"
              key={index}
            >
              <figure>
                <Bookmark movie={series} />
                <img
                  src={`https://image.tmdb.org/t/p/w500` + series.backdrop_path}
                  alt="tv shows"
                />
              </figure>
              <div className="card-body">
                <h2
                  className="card-title truncate text-sm lg:text-lg"
                  title={series.name}
                >
                  {series.name}
                </h2>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Series;
