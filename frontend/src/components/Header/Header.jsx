import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import classNames from "classnames";
import style from "./Header.module.css";

function Header() {
    return (
        <section className={classNames(style.home, "d-flex align-items-center")} id="home">
            <Container className={classNames(style.container)}>
                <Row className="align-items-center">
                    <Col lg={7} md={7}>
                        <div className={classNames(style.homeText)}>
                            <h1>Mekanik Profesional Kami Siap Datang</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nesciunt id</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Header;
