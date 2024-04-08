import Banner from "../Components/Banner";
import Estates from "../Components/Estates";
import {useLoaderData} from 'react-router-dom' ;

const Home = () => {
    const datas = useLoaderData() ;
    return (
        <div>
            <Banner></Banner>
            <Estates datas={datas}></Estates>
        </div>
    );
};

export default Home;