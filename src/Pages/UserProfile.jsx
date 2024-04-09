import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import 'animate.css';
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";

const UserProfile = () => {
    const {user} = useContext(AuthContext) ;
    return (
        <div className="card bg-base-100 shadow-xl h-[85vh] lg:mt-20 mt-24  flex justify-start items-center animate__animated animate__bounceInRight">
            <Helmet>
                <title>User - NestQuest</title>
            </Helmet>
            <div className="bg-gray-100 md:p-12 mx-5 p-5 md:mx-0 md:w-1/2 rounded-lg">
            <figure><img className="rounded-full w-[200px]" src={user.photoURL}alt="Album" /></figure>
            <div className="card-body text-center">
                <h2 className="text-xl">Your Name : <span className="font-medium">{user.displayName}</span></h2>
                <p className="text-lg">Email : <span className="font-medium">{user.email}</span></p>
              <Link to={'/update-profile'}> <button className="btn btn-accent mt-5 ">Update</button></Link>
            </div>
              
            </div>
        </div>
    );
};

export default UserProfile;