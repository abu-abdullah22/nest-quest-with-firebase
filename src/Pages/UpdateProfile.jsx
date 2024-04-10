import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import 'animate.css';
import {Helmet} from "react-helmet";


const UpdateProfile = () => {

    const { updateUser} = useContext(AuthContext);
   
    const handleUpdate = (e) => {
        const Name = e.target.name.value;
        const Photo = e.target.photo.value;

        updateUser(Name, Photo) ;     

    }
    return (
        <div>
            <Helmet>
                <title>Update - NestQuest</title>
            </Helmet>
            <div className="hero min-h-screen animate__animated animate__bounceInLeft">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Update Account</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleUpdate}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input name="photo" type="text" placeholder="photo URL" className="input input-bordered" required />
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