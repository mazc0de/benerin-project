import BsNavbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import { Container, NavDropdown } from "react-bootstrap";
import classNames from "classnames";
import style from "./Navbar.module.css";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

function Navbar() {
    const { currentUser, logout } = useAuth();

    const handleLogoutButton = async (e) => {
        e.preventDefault();
        console.log("hit");

        try {
            await logout();
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <BsNavbar className={classNames(style.navbar, "fixed-top")} expand="lg">
            <Container>
                <BsNavbar.Brand>
                    <Link to="/">
                        <h2 className="m-auto py-2 text-white">
                            bener.<span className="fw-bold text-white">in</span>
                        </h2>
                    </Link>
                </BsNavbar.Brand>
                <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BsNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/#home" className={classNames("text-uppercase text-white", style.navLink, style.nav_link_text)}>
                            Home
                        </Nav.Link>
                        <Nav.Link href="/#services" className={classNames("text-uppercase text-white", style.navLink, style.nav_link_text)}>
                            Service
                        </Nav.Link>
                        <Nav.Link href="/#mitra" className={classNames("text-uppercase text-white", style.navLink, style.nav_link_text)}>
                            Mitra
                        </Nav.Link>
                        <Nav.Link href="/#testimonial" className={classNames("text-uppercase text-white", style.navLink, style.nav_link_text)}>
                            Testimonial
                        </Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        {currentUser ? (
                            <>
                                <NavDropdown title={currentUser.email}>
                                    <NavDropdown.Item href="/dashboard">Dashboard</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={handleLogoutButton}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            </>
                        ) : (
                            <>
                                <LinkContainer to="/register">
                                    <Nav.Link className={classNames("text-uppercase text-white", style.navLink, style.nav_link_text)}>Register</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/login">
                                    <Nav.Link className={classNames("text-uppercase text-white", style.navLink, style.nav_link_text)}>Login</Nav.Link>
                                </LinkContainer>
                            </>
                        )}
                    </Nav>
                </BsNavbar.Collapse>
            </Container>
        </BsNavbar>
    );
}
export default Navbar;
