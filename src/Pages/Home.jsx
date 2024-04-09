import Banner from "../Components/Banner";
import Estates from "../Components/Estates";
import {useLoaderData} from 'react-router-dom' ;
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

 

const Home = () => {
    const datas = useLoaderData() ;
    return (
        <div>
        <div data-aos="flip-down"
        data-aos-offset="200">
        <Banner></Banner>
        </div>
           <div data-aos="fade-left"
        data-aos-offset="400">
           <Estates datas={datas}></Estates>
           </div>
        </div>
    );
};

export default Home;