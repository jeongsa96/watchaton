function Galeri(props) {
    return (
        <div className="mx-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">        
        {
            props.galeriList.map((item, index) => {
                return (
                    <div className="card bg-base-100 w-64 h-48 shadow-sm" keys={index}>
                        <figure className="image-full rounded-xl">
                            <img
                            src={item.image}                                  
                            alt={item.alt}  
                            />
                        </figure>
                    </div>
                )
            })  
        }  
        </div>
    );
}
export default Galeri;