import { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import {  toast } from 'react-toastify';
import {Helmet} from "react-helmet";
import 'animate.css';


const Login = () => {
  const {signIn, googleLogin, githubLogin,user} = useContext(AuthContext) ;
  const [show, setShow] = useState(false) ;
  console.log(user);
  const navigate = useNavigate() ;
  const location = useLocation() ;
  const hanldeLogin = e => {
    e.preventDefault() ;
    const email = e.target.email.value ;
    const password = e.target.password.value ;
    console.log(email, password);

    //log in
    signIn(email, password)
    .then(result=> {
      if(result.user) {
        toast.success('Login successful') ;
        navigate(location?.state || '/') ;
      }
    })
    .catch(error=>{
      if (error.code) {
       toast.error('Wrong Password')
      } else {
        toast.error('Error loggin in')
      }
    })

  }

  const handleGoogle = () => {
    googleLogin()
    .then(result=> {
  
      if(result.user) {
        toast.success('Login Successful') ;
        navigate(location?.state || '/') ;
      }
    })
    .catch(error=> {
      console.log(error);
      toast.error('Error loggin in')
    })
  }

  const handleGithub = () => {
    githubLogin()
    .then(result=> {
      if(result.user) {
        toast.success('Login Successful')
        navigate(location?.state || '/') ;
      }
    })
    .catch(error=> {
      console.log(error);
      toast.error('Error loggin in') ;
    })
  }
    return (
       <div>
    <Helmet>
      <title>
        Login - NestQuest
      </title>
    </Helmet>
         <div className="hero min-h-screen  animate__animated animate__bounceInLeft">
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
               <div className="gap-2 flex items-center">
               <input name="password"  type={show ? 'text' :"password" } placeholder="password" className="input input-bordered relative" required />
                <span className="absolute right-10" onClick={()=> setShow(!show)}>
                   {
                    show ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye> 
                    }
                  </span>
               </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="mx-auto mb-2">New Here? Go to, <Link to={'/register'} className="text-primary">Register</Link></p>
            <div>
              <p className="divider">Continue with</p>
             <div className="m-5 flex justify-between">
             <button onClick={handleGoogle} className="btn btn-info"><FaGoogle />Google</button>
             <button onClick={handleGithub} className="btn btn-success"><FaGithub />Github</button>
             </div>
            </div>
          </div>
        
        </div>
      
      </div>
       </div>
    );
};

export default Login;