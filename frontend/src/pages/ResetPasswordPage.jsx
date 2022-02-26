import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ResetPassword from "../components/ResetPassword/ResetPassword";
import Navbar from "../components/Navbar/Navbar";

function useQuery() {
    const location = useLocation();
    return new URLSearchParams(location.search);
}

export default function ResetPasswordPage() {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState("");

    const query = useQuery();

    const { resetPassword } = useAuth();

    const navigate = useNavigate();

    const handleResetPasswordSubmitted = async (e) => {
        console.log(confirmPassword);
        console.log(newPassword);

        e.preventDefault();

        try {
            setLoading(true);

            if (confirmPassword !== newPassword) {
                setLoading(false);
                return setError(`Password tidak sama!`);
            }

            setTimeout(() => {
                resetPassword(query.get("oobCode"), newPassword)
                    .then((res) => {
                        setLoading(false);
                        setSuccess("Password has been reset");
                        console.log(res);
                        setTimeout(() => {
                            navigate("/login");
                        }, 1000);
                    })
                    .catch((err) => {
                        setError(err.message);
                        console.log(err.message);
                    });
            }, 1000);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <>
            <Navbar />
            <ResetPassword
                handleResetPasswordSubmitted={handleResetPasswordSubmitted}
                error={error}
                success={success}
                newPassword={newPassword}
                setNewPassword={setNewPassword}
                loading={loading}
                confirmPassword={confirmPassword}
                setConfirmPassword={setConfirmPassword}
            />
        </>
    );
}
