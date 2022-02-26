import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../config/firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged, signOut, sendPasswordResetEmail, confirmPasswordReset } from "firebase/auth";

const AuthContext = createContext({
    currentUser: null,
    register: () => Promise,
    login: () => Promise,
    signInWithGoogle: () => Promise,
    logout: () => Promise,
    forgotPassword: () => Promise,
    resetPassword: () => Promise,
});

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            if (user) {
                localStorage.setItem("ACCESS_TOKEN", `Bearer ${user?.accessToken}`);
                localStorage.setItem("ROLE", "USER");
            }
            if (!user) {
                localStorage.removeItem("ACCESS_TOKEN");
            }
        });
        return () => {
            unsubscribe();
        };
    }, []);

    function register(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function signInWithGoogle() {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider);
    }

    function logout() {
        return signOut(auth);
    }

    function forgotPassword(email) {
        return sendPasswordResetEmail(auth, email, { url: "http://localhost:3000/login" });
    }

    function resetPassword(oobCode, newPassword) {
        return confirmPasswordReset(auth, oobCode, newPassword);
    }

    const value = {
        currentUser,
        register,
        login,
        signInWithGoogle,
        logout,
        forgotPassword,
        resetPassword,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
