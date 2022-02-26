import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Register from "../components/Register/Register";
import Navbar from "../components/Navbar/Navbar";

import { useAuth } from "../context/AuthContext";

export default function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const { register, signInWithGoogle } = useAuth();

    const navigate = useNavigate();

    const handleRegisterSubmitted = async (e) => {
        e.preventDefault();

        if (confirmPassword !== password) {
            return setError(`Password does'nt match!`);
        }

        try {
            setError("");
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                register(email, password)
                    .then((response) => {
                        console.log(response);
                        navigate("/");
                    })
                    .catch((err) => {
                        console.log(err.message);
                        setError(err.message);
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
            <Navbar></Navbar>
            <Register
                handleRegisterSubmitted={handleRegisterSubmitted}
                error={error}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                confirmPassword={confirmPassword}
                setConfirmPassword={setConfirmPassword}
                loading={loading}
                handleSignInWithGoogleAccount={handleSignInWithGoogleAccount}
            />
        </>
    );
}
