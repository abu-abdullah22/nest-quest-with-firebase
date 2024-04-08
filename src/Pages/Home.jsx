import Banner from "../Components/Banner";
import Estates from "../Components/Estates";
import {useLoaderData} from 'react-router-dom' ;

const Home = () => {
    const datas = useLoaderData() ;
    console.log(datas);
    return (
        <div>
            <Banner></Banner>
            <Estates datas={datas}></Estates>
        </div>
    );
};

export default Home;