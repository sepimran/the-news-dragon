import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null); 
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    
    const user = null;

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth , email, password)
    }

    const signInUser = (email,password) =>{
        return signInWithEmailAndPassword(auth, email,password);
    }

    //update profile 
    const updateProfileData = (name,url) =>{
        return updateProfile(auth.currentUser , {
            displayName : name,
            photoURL : url
        })
    }


    const authInfo = {
        user,
        createUser,
        signInUser,
        updateProfileData,
    }
    

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;