import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext =createContext(null) ;
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null) ;

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
      return signOut(auth) ;
    }

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider) ;
    }

    useEffect(()=> {
     const unSubscribe =  onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser) ;
        }) ;
        return () => {
            unSubscribe() ;
        }
    }, [])



    const auhtInfo = {createUser , user, logOut, signIn, googleLogin}
    return (
        <AuthContext.Provider value={auhtInfo} > 
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;