import Estate from "./Estate";


const Estates = ({datas}) => {

    return (
        <div className="lg:mx-20 mb-24 mt-12">
            <h2 className="text-3xl text-[#131313] font-bold text-center mt-6">Estates</h2>
            <p className="text-center text-[#131313CC] mb-10">Discover diverse residential estates, from cozy homes to modern apartments. Find your dream living space with us today!</p>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
           {
                datas?.properties?.map(data => <Estate key={data.id} data={data}></Estate>)
            }
           </div>
        </div>
    ); 
};

export default Estates;

