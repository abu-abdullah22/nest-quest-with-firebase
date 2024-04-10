import Banner from "../Components/Banner";
import Estates from "../Components/Estates";
import {useLoaderData} from 'react-router-dom' ;
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
import {Helmet} from 'react-helmet'
import Different from "../Components/Different";
import Team from "../Components/Team";

 

const Home = () => {
    const datas = useLoaderData() ;
    return (
        <div>
            <Helmet>
                <title>Home - NestQuest</title>
            </Helmet>
        <div data-aos="flip-down"
        data-aos-offset="200">
        <Banner></Banner>
        </div>
           <div data-aos="fade-up"
        data-aos-offset="400">
           <Estates datas={datas}></Estates>
           </div>
           <div data-aos="fade-down"
        data-aos-offset="400">
            <Different></Different>
           </div>
           <div data-aos="fade-up"
        data-aos-offset="400">
            <Team></Team>
           </div>
        </div>
    );
};

export default Home;