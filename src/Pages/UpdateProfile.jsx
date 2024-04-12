import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import 'animate.css';
import {Helmet} from "react-helmet";


const UpdateProfile = () => {
    const {user} = useContext(AuthContext) ;
    const [name, setName] = useState('') ;
    const [photo, setPhoto] = useState('');

   useEffect(()=> {
    if(user) {
        setName(user.displayName);
        setPhoto(user.photoURL) ;
    }
   },[user])

    const { updateUser} = useContext(AuthContext);
   
    const handleUpdate = () => {
        updateUser(name, photo) ;     
    }
    return (
        <div>
            <Helmet>
                <title>Update - NestQuest</title>
            </Helmet>
            <div className="hero min-h-[85vh] animate__animated animate__bounceInLeft">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left flex flex-col">
                        <h1 className="text-5xl font-bold">Update Account</h1>
                        <div className="my-8 border-2 border-gray-400 flex flex-col items-center p-5 gap-3 rounded-lg">
                            <img className="w-[100px] rounded-full h-[100px]" src={user.photoURL} alt="" />
                            <p className="font-medium">Email : {user.email}</p>
                        </div>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            
                        <form className="card-body" onSubmit={handleUpdate}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name="name" type="text" onChange={(e)=> setName(e.target.value)} value={name} placeholder='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input name="photo" type="text" onChange={(e)=> setPhoto(e.target.value)}  value={photo} placeholder="photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;