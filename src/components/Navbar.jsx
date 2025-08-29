import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [navbarClass, setNavbarClass] = useState(
    "navbar bg-transparent fixed top-0 left-0 right-0 z-50 shadow-sm transition duration-500 ease-in-out"
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setNavbarClass(
          "navbar bg-base-100 fixed top-0 left-0 right-0 z-50 shadow-sm transition duration-500 ease-in-out"
        );
      } else {
        setNavbarClass(
          "navbar bg-transparent fixed top-0 left-0 right-0 z-50 shadow-sm transition duration-500 ease-in-out"
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const searchQuery = e.target.search.value.trim();
    if (!searchQuery) return;
    // Assuming you have a tmdb API key
    const apiKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzBiYTZlMzBhYThhNmUwNDNkODdiYWI0MGRkOWIxYSIsIm5iZiI6MTc0MjQ2Njk2MC4yNDYsInN1YiI6IjY3ZGJlZjkwMmRiYTY2ODYyNTdmOWM3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MZK5EoLWULZo32YiVKUugo4hCQfRl4kUyovGl6XqJtE";
    const url = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${searchQuery}`;
    // You can use fetch or axios to make a request to the API
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Assuming you have a SearchPage component
        navigate("/search", { state: data });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className={navbarClass}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="/#movies">Movies</a>
            </li>
            <li>
              <a href="/#show">TV Shows</a>
            </li>
            <li>
              <a href="/#drama">Drama</a>
            </li>
            <li>
              <Link to="/bookmark">Bookmark</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          Watchathon!
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/#movies">Movies</a>
          </li>
          <li>
            <a href="/#show">TV Shows</a>
          </li>
          <li>
            <a href="/#drama">Drama</a>
          </li>
          <li>
            <Link to="/bookmark">Bookmark</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <div className="dropdown-content z-1 w-26 md:right-24 p-2">
            <form onSubmit={handleSearch} className="mx-auto max-w-md">
              <input
                id="search"
                name="search"
                type="text"
                placeholder="Search..."
                className="input input-bordered w-24 md:w-auto"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
