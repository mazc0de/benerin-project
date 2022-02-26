import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import ForgotPassword from "../components/ForgotPassword/ForgotPassword";
import Navbar from "../components/Navbar/Navbar";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState("");

  const { forgotPassword } = useAuth();

  const handleForgotPasswordSubmitted = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setTimeout(() => {
        forgotPassword(email)
          .then((res) => {
            setSuccess("Email sent, please check your inbox");
            setLoading(false);
            console.log(res);
          })
          .catch((err) => console.log(err.message));
      }, 1000);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Navbar />
      <ForgotPassword handleForgotPasswordSubmitted={handleForgotPasswordSubmitted} error={error} success={success} email={email} setEmail={setEmail} loading={loading} />
    </>
  );
}
