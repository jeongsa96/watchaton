import { Link } from "react-router-dom";
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

  const handleSearch = (e) => {
    e.preventDefault();
    const searchQuery = e.target.search.value.trim();
    if (!searchQuery) return;
    try {
      console.log(searchQuery);
    } catch (err) {
      console.log(err);
    }
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
              <a href="/">Beranda</a>
            </li>
            <li>
              <a href="/#dsad">Tentang Kami</a>
            </li>
            <li>
              <a href="/galeri">Galeri</a>
            </li>
            <li>
<<<<<<< HEAD
              <Link to="/bookmark">Berita</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          Cendekia
=======
              <Link to="/bookmark">Bookmarks</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost hover:bg-transparent text-xl">
          Watchathon!
>>>>>>> f331993012bf2a4af7962d1542a15935ed28e894
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/galdsaderi">Tentang Kami</a>
          </li>
          <li>
            <a href="/galeri">Galeri</a>
          </li>
          <li>
<<<<<<< HEAD
            <Link to="/bookmark">Berita</Link>
=======
            <Link to="/bookmark">Bookmarks</Link>
>>>>>>> f331993012bf2a4af7962d1542a15935ed28e894
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <button className="btn btn-ghost btn-circle hover:bg-transparent">
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
