import { Link } from "react-router-dom";

const Estate = ({data}) => {
    return (
        <div className="card card-compact bg-base-100 shadow-xl mx-5 hover:scale-105 hover:border-2 border-gray-300 hover:cursor-pointer">
        <figure><img className="w-full h-[214px]"  src={data.image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title text-2xl text-[#131313]">{data.estate_title}</h2>
          <p className="font-medium text-[#131313CC]">#{data.segment_name}</p>
          <p className="font-medium text-lg text-[#131313CC]">{data.location}</p>
          <p className="text-xl font-bold text-[#131313CC]">On {data.status}</p>
          <div className="card-actions ">
          <Link to={`/estate/${data.id}`}> <button className="btn btn-accent">{data.button}</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Estate;