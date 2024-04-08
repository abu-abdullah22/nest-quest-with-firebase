import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const {signIn, googleLogin} = useContext(AuthContext)
  const hanldeLogin = e => {
    e.preventDefault() ;
    const email = e.target.email.value ;
    const password = e.target.password.value ;
    console.log(email, password);

    //log in
    signIn(email, password)
    .then(result=> console.log(result.user))
    .catch(error=> console.log(error))

  }

  const handleGoogle = () => {
    googleLogin()
  }
    return (
       <div>
    
         <div className="hero min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={hanldeLogin}> 
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="mx-auto mb-2">New Here? Go to, <Link to={'/register'} className="text-primary">Register</Link></p>
            <div>
              <p className="divider">Continue with</p>
             <div className="m-5">
             <button className="btn">Google</button>
             </div>
            </div>
          </div>
        
        </div>
      
      </div>
       </div>
    );
};

export default Login;