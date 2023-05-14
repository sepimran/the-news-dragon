import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';

export const AuthContext = createContext(null); 
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true)

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth , email, password)
    }

    const signInUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email,password);
    }

    //update profile 
    const updateProfileData = (name,url) =>{
        return updateProfile(auth.currentUser , {
            displayName : name,
            photoURL : url
        })
    }

    const logOut = () =>{
        setLoading(true);
        signOut(auth)
    }
  

    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth , loggedUser => {
            console.log('Logged in user', loggedUser);
            setUser(loggedUser);
            setLoading(false)
        })

        return () =>{
            unSubscriber();
        }
    }, [])

   


    const authInfo = {
        user,
        createUser,
        signInUser,
        updateProfileData,
        logOut,
        loading,
    }
    

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;