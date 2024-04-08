import { useContext, useState } from "react";
import { Link,useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { set } from "firebase/database";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState('') ;

  const { createUser, setUser } = useContext(AuthContext);
  const handleRegister = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if(password.length< 6 ){
      setError('Password must be 6 characters')
      return
    } else if(!/[a-z]/.test(password)){
      setError('Password must contain a lower letter')
      return 
    } else if(!/[A-Z]/.test(password)){
      setError('Password must contain an uppercase letter')
      return
    }

    setError('')

    //create User 
    createUser(email, password)
      .then(result=> {
        setUser(null)
      if(result.user) {
        navigate(location?.state || '/') ;
      }
    })
      .catch(error => console.log(error))
  }


  
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Create Account</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input name="name" type="text" placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input name="photo" type="text" placeholder="photo URL" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
              </div>{
                error && 
               <small className="text-red-800">{error}</small>
              }
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p className="mx-auto mb-2">Already have an account, then <Link to={'/login'} className="text-primary">Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;