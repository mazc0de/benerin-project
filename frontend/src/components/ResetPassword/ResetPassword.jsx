import { Card, Alert, FormGroup, FormControl, FormLabel, Form } from "react-bootstrap";
import classNames from "classnames";
import style from "./ResetPassword.module.css";

export default function ForgotPassword({ handleResetPasswordSubmitted, error, success, newPassword, setNewPassword, confirmPassword, setConfirmPassword, loading }) {
    return (
        <>
            <div className={classNames("w-100 vh-100 d-flex justify-content-center align-items-center", style.reset_password_page)}>
                <Card className={classNames(style.reset_password_card)}>
                    <Card.Body>
                        <h3 className="text-uppercase text-center fw-bold">Reset Password</h3>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form onSubmit={handleResetPasswordSubmitted}>
                            <div className="py-2">
                                <FormGroup id="password">
                                    <FormLabel>Password</FormLabel>
                                    <FormControl
                                        type="password"
                                        placeholder="Your new password"
                                        value={newPassword}
                                        onChange={(e) => {
                                            setNewPassword(e.target.value);
                                        }}
                                    />
                                </FormGroup>
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
