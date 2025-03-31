import React from "react";
import { useMovieContext } from "../contexts/MovieContext";

function Bookmark({ movie }) {
  const { isBookmarked, addToBookmarks, removeFromBookmarks } =
    useMovieContext();
  const booked = isBookmarked(movie.id);

  function toggleBookmark(e) {
    e.preventDefault();
    if (booked) removeFromBookmarks(movie.id);
    else addToBookmarks(movie);
  }
  return (
    <div className="bookmark-icon" >
      <i className={`fa-bookmark ${booked ? "fas" : "far"}`} onClick={toggleBookmark}></i>
    </div>
  );
}

export default Bookmark;
