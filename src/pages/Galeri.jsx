import GaleriComps from "../components/Galeri"

import { galeriList } from "../data/Galeri"

function Galeri() {
  return (
    <>
      <div className="bg-base-100 h-40 pt-20">
        <h1 className="text-center text-3xl font-bold">
          Galeri Paud Cendekia
        </h1>
      </div>
        <GaleriComps galeriList={galeriList} />
    </>
  );
}

export default Galeri;