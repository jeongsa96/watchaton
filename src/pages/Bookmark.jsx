import { useMovieContext } from "../contexts/MovieContext";
import Icon from "../components/BookmarkIcon";

function Bookmark() {
  const { bookmarks } = useMovieContext();

  if (!bookmarks) {
    return (
      <div className="text-2xl font-extrabold text-white text-center">
        Bookmarks
      </div>
    );
  } else {
    return (
      <section className="bg-base-100">
        <h1 id="movies" className="px-4 pt-20 text-lg font-bold">
          Your Bookmarks
        </h1>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
          {bookmarks.map((bm) => (
            <div
              className="card card-xs bg-base-200 w-48 flex-shrink-0 shadow-sm transition-all duration-300 hover:-translate-y-1 lg:w-64"
              key={bm.id}
            >
              <figure>
                <Icon movie={bm} />
                <img
                  src={`https://image.tmdb.org/t/p/w500` + bm.backdrop_path}
                  alt="bm"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title truncate text-sm lg:text-lg">
                  {bm.original_title ? bm.original_title : bm.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Bookmark;
