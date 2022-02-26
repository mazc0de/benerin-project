import { Card, Button, Form, Alert, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import classNames from "classnames";
import style from "./Register.module.css";
import { Link } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";

export default function Register({ handleRegisterSubmitted, error, email, password, setEmail, setPassword, confirmPassword, setConfirmPassword, loading, handleSignInWithGoogleAccount }) {
    return (
        <>
            <div className={classNames("w-100 vh-100 d-flex justify-content-center align-items-center", style.register_page)}>
                <Card className={classNames(style.register_card, "mx-2")}>
                    <Card.Body>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Button className={classNames("w-100 mb-2 fw-bold text-uppercase")} variant="info" onClick={handleSignInWithGoogleAccount}>
                            <BsGoogle /> Sign Up With Google
                        </Button>
                        <Form onSubmit={handleRegisterSubmitted}>
                            <div className="py-2">
                                <FormGroup id="email">
                                    <FormLabel>Email</FormLabel>
                                    <FormControl
                                        type="email"
                                        placeholder="Your Email"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                    />
                                </FormGroup>
                            </div>
                            <div className="py-2">
                                <FormGroup id="password">
                                    <FormLabel>Password</FormLabel>
                                    <FormControl
                                        type="password"
                                        placeholder="Your Password"
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                        }}
                                    />
                                </FormGroup>
                            </div>
                            <div className="py-2">
                                <FormGroup id="password">
                                    <FormLabel>Confirm Password</FormLabel>
                                    <FormControl
                                        type="password"
                                        placeholder="Confirm Your Password"
                                        value={confirmPassword}
                                        onChange={(e) => {
                                            setConfirmPassword(e.target.value);
                                        }}
                                    />
                                </FormGroup>
                            </div>

                            <Button className="w-100 mt-2" type="submit" variant="warning">
                                {loading ? <div className="spinner-border spinner-border-sm" role="status"></div> : "Register"}
                            </Button>
                        </Form>
                        <div className="w-100 text-center mt-3">
                            Already registered? <Link to="/login">Login</Link>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}
