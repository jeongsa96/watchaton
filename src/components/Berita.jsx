function Berita(props) {
      return (
        <div class="flex space-x-1 lg:mx-64 overflow-x-hidden px-4 pt-1 lg:space-x-3">
        {
            props.beritaList.map((item, index) => {
                return (
                    <div data-aos="zoom-in" data-aos-duration="500" className='card card-xs ms-4 bg-base-100 w-64 h-52 flex-shrink-0 shadow-sm transition-all duration-300 hover:-translate-y-1 lg:w-64' key={index}>
                        <figure>
                            <img
                            src={item.image}
                            alt="berita"
                            />
                        </figure>
                        <div className="card-body">
                            <h2
                            className="card-title truncate text-sm lg:text-lg"
                            title={item.judul}
                            >
                            {item.judul}
                            </h2>
                        </div>
                    </div>
                )
            })
        }
    </div>
  );
}

export default Berita;
