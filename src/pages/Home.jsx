import Hero from "../components/Hero";
import Berita from "../components/Berita";
import Daftar from "../components/Pendaftaran";
import { beritaList } from "../data/Berita";

function Home() {
  return (
    <>
      <Hero />
      <section className="bg-base-200">
        <h1 className="pt-8 lg:mx-72 text-xl font-bold mx-6 my-6">
          Berita
        </h1>
        <Berita beritaList={beritaList} />      
      </section>
      <section className="bg-base-200 my-12">
        <Daftar/>      
      </section>
<<<<<<< HEAD
=======
      <section className="bg-base-200">
        <h1 id="drama" className="px-4 pt-8 text-lg font-bold">
          K-Drama
        </h1>
        <Drama />
      </section>
      <Footer />
>>>>>>> f331993012bf2a4af7962d1542a15935ed28e894
      <script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></script>
    </>
  );
}

export default Home;
