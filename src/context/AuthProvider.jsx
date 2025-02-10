import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create an user
    const createUser = async(email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
        .finally(() => setLoading(false));
    }

    // login user
    const login = async(email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
        .finally(() => setLoading(false));
    }

    // sign out
    const logOut = async() => { 
        setLoading(true);
        return signOut(auth)
        .finally(() => setLoading(false));
    }

    // google sign in
    const provider = new GoogleAuthProvider();

    const googleSignIn = async() => {
        setLoading(true);
        return signInWithPopup(auth, provider)
        .finally(() => setLoading(false));
    }

    // observer

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setLoading(false)
            } else {
                setUser(null);
            }
        });

        return unsubscribe;
    }, []);


    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        login,
        logOut,
        googleSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;