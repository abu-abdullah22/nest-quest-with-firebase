import { useParams, useLoaderData } from 'react-router-dom'
import 'animate.css';
import {Helmet} from "react-helmet";

const EstateDetails = () => {
    const { id } = useParams() ;
    const idInt = parseInt(id) ;
    const estates = useLoaderData() ;
    const estatesData =  estates.properties ;

    const estate = estatesData?.find((estate) => estate.id === idInt)

    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
            <Helmet>
                <title>Details - NestQuest</title>
            </Helmet>
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-around">
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 animate__animated animate__bounceIn">
                    <img src={estate.image} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-lg" />
                </div>
                <div className="flex flex-col justify-center  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left animate__animated animate__fadeInRight">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl text-[#131313]">
                    {estate.estate_title}
                    </h1>
                    <h1 className="text-2xl font-bold leading-none sm:text-2xl mt-3 text-[#131313CC]">
                    #{estate.segment_name}
                    </h1>
                    <p className="my-6 text-lg sm:mb-12 text-[#131313CC]">
                        {estate.description}
                    </p>
                  <div className='flex gap-4'>
                  <p className='border-2 border-gray-100 rounded p-2'>
                        {estate.facilities[0]}
        
                    </p>
                  <p className='border-2 border-gray-100 rounded p-2'>
                        {estate.facilities[1]}
        
                    </p>
                  <p className='border-2 border-gray-100 rounded p-2'>
                        {estate.facilities[2]}
        
                    </p>
                  </div>

                  <div className='mt-4'>
                   <p> <span className='text-[#131313B2] font-medium'> Price :</span> <span className='font-medium'>{estate.price}</span></p>
                   <p><span className='text-[#131313B2] font-medium'> Area :</span> <span className='font-medium'> {estate.area}</span></p>
                   <p> <span className='text-[#131313B2] font-medium'> Status :</span> <span className='font-medium'> {estate.status}</span></p>
                   <p><span className='text-[#131313B2] font-medium'>Location :</span> <span className='font-medium'> {estate.location}</span></p>
                  </div>
                  <div className='mt-6'>
                    <button className='btn btn-accent'>Buy Now</button>
                  </div>
                </div>
            </div>
        </section>
    );
};

export default EstateDetails;