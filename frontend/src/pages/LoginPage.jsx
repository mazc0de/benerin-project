import { useState } from "react";

import Login from "../components/Login/Login";
import Navbar from "../components/Navbar/Navbar";

import { useAuth } from "../context/AuthContext";

import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const { login, signInWithGoogle } = useAuth();

    const navigate = useNavigate();

    const handleLoginSubmitted = async (e) => {
        e.preventDefault();

        try {
            setError("");
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                login(email, password)
                    .then((response) => {
                        console.log(response);
                        navigate("/dashboard");
                    })
                    .catch((err) => {
                        console.log(err.message);
                        setError("Email tidak terdaftar");
                    });
            }, 1000);
        } catch (err) {
            console.log(err.message);
            return setError(err.message);
        }
    };

    const handleSignInWithGoogleAccount = async (e) => {
        e.preventDefault();

        try {
            signInWithGoogle()
                .then((response) => {
                    console.log(response);
                    navigate("/");
                })
                .catch((err) => {
                    console.log(err.message);
                    setError(err.message);
                });
        } catch (err) {
            return setError("Failed to Sign Up");
        }
    };

    return (
        <>
            <Navbar />
            <Login handleLoginSubmitted={handleLoginSubmitted} error={error} email={email} setEmail={setEmail} password={password} setPassword={setPassword} loading={loading} handleSignInWithGoogleAccount={handleSignInWithGoogleAccount} />
        </>
    );
}
