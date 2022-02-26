import { Card, Button, Form, Alert, FormGroup, FormLabel, FormControl } from "react-bootstrap";
import classNames from "classnames";
import style from "./Login.module.css";
import { Link } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";

export default function Login({ handleLoginSubmitted, error, email, password, setEmail, setPassword, loading, handleSignInWithGoogleAccount }) {
    return (
        <>
            <div className={classNames("w-100 vh-100 d-flex justify-content-center align-items-center", style.login_page)}>
                <Card className={classNames(style.login_card, "mx-2")}>
                    <Card.Body>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Button className={classNames("w-100 mb-2 fw-bold text-uppercase")} variant="info" onClick={handleSignInWithGoogleAccount}>
                            <BsGoogle /> Sign In With Google
                        </Button>
                        <Form onSubmit={handleLoginSubmitted}>
                            <div className="py-2">
                                <FormGroup id="email">
                                    <FormLabel>Email</FormLabel>
                                    <FormControl
                                        id="email"
                                        name="email"
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

                            <Button className="w-100 mt-2" type="submit" variant="warning">
                                {loading ? <div className="spinner-border spinner-border-sm" role="status"></div> : "Login"}
                            </Button>
                        </Form>
                        <div className="w-100 text-center mt-3">
                            Have'nt Account? <Link to="/register">Register</Link>
                        </div>
                        <div className="w-100 text-center mt-1">
                            <Link to="/forgot-password">Forgot your password?</Link>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}
