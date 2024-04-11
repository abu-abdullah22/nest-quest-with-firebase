import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import 'animate.css';

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext) ;

  const handleSignOut = () => {
    logOut()
    .then()
    .catch()
  }
  const navLink = (
    <>
      <li>
        <NavLink className="font-medium" to={"/"}>Home</NavLink>
      </li>
     { user && <li>
        <NavLink className="font-medium" to={"/user-profile"}>Profile</NavLink>
      </li>}
      {user && <li>
        <NavLink className="font-medium" to={"/update-profile"}>Update Profile</NavLink>
      </li>}
     { user &&  <li>
        <NavLink className="font-medium" to={"/feedback"}>Feedback</NavLink>
      </li>}

      <li>
        <NavLink className="font-medium" to={"/contact"}>Contact</NavLink>
      </li>
      <li>
        <NavLink className="font-medium" to={"/timeLine"}>Time Line</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 animate__animated animate__bounce">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content  z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <Link to={'/'} className="btn btn-ghost text-2xl">NestQuest</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      <div className="navbar-end">
        {
          user ? <div className="flex items-center" >
           <div className=" tooltip tooltip-left mr-2" data-tip={user.displayName || 'user'}>
           <img src={user?.photoURL || '/user.jpg'} className="w-[50px] h-[50px] rounded-full" alt="" /> 
           </div>
             <button onClick={handleSignOut} className="btn btn-accent">Log Out </button>
          </div> : 
       
           <Link to={'/login'} className="btn btn-accent">Login</Link>
     
        }
       
      </div>
    </div>
  );
};

export default Navbar;
