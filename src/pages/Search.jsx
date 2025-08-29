import React from 'react';
import { useLocation } from 'react-router-dom';

const Search = () => {
  const searchResults = useLocation().state;
    return (
      <section className="bg-base-100">
        <h1 id="movies" className="px-4 pt-20 text-lg font-bold">
          Your Bookmarks
        </h1>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
          {searchResults.map((res) => (
            <div
              className="card card-xs bg-base-200 w-48 flex-shrink-0 shadow-sm transition-all duration-300 hover:-translate-y-1 lg:w-64"
              key={res.id}
            >
              <figure>
                <Icon movie={res} />
                <img
                  src={`https://image.tmdb.org/t/p/w500` + res.backdrop_path}
                  alt="res"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title truncate text-sm lg:text-lg">
                  {res.original_title ? res.original_title : res.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }


export default Search;
