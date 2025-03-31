import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState(()=>{
    return JSON.parse(localStorage.getItem("bookmarks")) || []
  });

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  const addToBookmarks = (movie) => {
    setBookmarks((prev) => [...prev, movie]);
    console.log("movies: ", localStorage.getItem("bookmarks"))
  };
  
  const removeFromBookmarks = (movieId) => {
    setBookmarks((prev) => prev.filter((movie) => movie.id !== movieId));
    console.log("movies: ", localStorage.getItem("bookmarks"))
  };

  const isBookmarked = (movieId) => {
    return bookmarks.some((movie) => movie.id === movieId);
  };

  const value = {
    bookmarks,
    addToBookmarks,
    removeFromBookmarks,
    isBookmarked,
  };
  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
