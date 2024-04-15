import 'animate.css';
import {Helmet} from "react-helmet";
const TimeLine = () => {
    return (
       <div className='animate__animated animate__bounceInUp z-1'>
        <Helmet>
            <title>TimeLine - NestQuest</title>
        </Helmet>
        <h1 className="text-4xl mt-12 font-medium text-center">How We Manage To Do Things</h1>
         <ul className="p-4 lg:p-8 bg-gray-800 text-gray-100 mt-10 mb-40 md:mx-24 mx-4 rounded-lg">
            <li>
                <article>
                    <a rel="noopener noreferrer" href="#" className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:bg-gray-900">
                        <h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">Property Listed </h3>
                        <time dateTime="" className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 text-gray-400">March 1, 2024</time>
                        <p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 text-gray-300">The property was listed on our website, featuring its unique characteristics and attractive amenities.</p>
                    </a>
                </article>
            </li>
            <li>
                <article>
                    <a rel="noopener noreferrer" href="#" className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:bg-gray-900">
                        <h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9"> Open House Event</h3>
                        <time dateTime="" className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 text-gray-400">March 5, 2024</time>
                        <p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 text-gray-300">An open house event was held, allowing prospective buyers to visit the property and explore its interior and exterior features.</p>
                    </a>
                </article>
            </li>
            <li>
                <article>
                    <a rel="noopener noreferrer" href="#" className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:bg-gray-900">
                        <h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">Offers Accepted </h3>
                        <time dateTime="" className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 text-gray-400">March 10, 2024</time>
                        <p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 text-gray-300">After receiving multiple offers, the seller accepted a competitive offer from a prospective buyer.</p>
                    </a>
                </article>
            </li>
            <li>
                <article>
                    <a rel="noopener noreferrer" href="#" className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:bg-gray-900">
                        <h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">Closing</h3>
                        <time dateTime="" className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 text-gray-400">April 10, 2024</time>
                        <p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 text-gray-300">The sale transaction was successfully completed during the closing meeting, with ownership of the property transferred to the buyer.</p>
                    </a>
                </article>
            </li>
        </ul>
       </div>
    );
};

export default TimeLine;