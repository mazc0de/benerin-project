import { Card, Form, Alert, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import classNames from "classnames";
import style from "./ForgotPassword.module.css";

export default function ForgotPassword({ handleForgotPasswordSubmitted, error, success, email, setEmail, loading }) {
    return (
        <>
            <div className={classNames("w-100 vh-100 d-flex justify-content-center align-items-center", style.forgot_password_page)}>
                <Card className={classNames(style.forgot_password_card)}>
                    <Card.Body>
                        <h3 className="text-uppercase text-center fw-bold">Forgot Password</h3>
                        {error && <Alert variant="danger">{error}</Alert>}
                        {success && <Alert variant="success">{success}</Alert>}
                        <Form onSubmit={handleForgotPasswordSubmitted}>
                            <div className="py-2">
                                <FormGroup id="email">
                                    <FormLabel>Email</FormLabel>
                                    <FormControl
                                        type="email"
                                        placeholder="Your email"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                    />
                                </FormGroup>
                            </div>

                            <button className={classNames("w-100 mt-2 btn text-white", style.button)} type="submit">
                                {loading ? <div className="spinner-border spinner-border-sm" role="status"></div> : "Confirm Password"}
                            </button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}
