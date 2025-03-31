import Hero from "../components/Hero";
import Movie from "../components/Movies";
import Series from "../components/Series";
import Drama from "../components/Drama";
import Footer from "../components/Footer";

function App() {
  return (
    <>
      <Hero />
      <section className="bg-base-200">
        <h1 id="movies" className="px-4 pt-8 text-lg font-bold">
          Movies
        </h1>
        <Movie />
      </section>
      <section className="bg-base-200">
        <h1 id="show" className="px-4 pt-8 text-lg font-bold">
          TV Shows
        </h1>
        <Series />
      </section>
      <section className="bg-base-200">
        <h1 id="drama" className="px-4 pt-8 text-lg font-bold">
          Drama
        </h1>
        <Drama />
      </section>
      <Footer />
      <script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></script>
    </>
  );
}

export default App;
