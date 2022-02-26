import { Container, Row, Col } from "react-bootstrap/";
import classNames from "classnames";
import style from "./SectionAboutUs.module.css";
import WorkshopImage from "../../assets/images/bg/workshop.jpg";

function SectionAboutUs({ children }) {
    return (
        <section className={classNames(style.sectionPadding)} id="mitra">
            <Container>
                <Row className={classNames("justify-content-center")}>
                    <Col lg={8}>
                        <div className={classNames(style.sectionTitle)}>
                            <h2>
                                About <span>Us</span>
                            </h2>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className="d-flex justify-content-center align-items-center">
                <Row>
                    <Col lg md={6} className={classNames(style.boxPromo, "d-flex justify-content-center")}>
                        <div data-aos="fade-in">
                            <div>
                                <img src={WorkshopImage} alt="Workshop" className={classNames(style.img_workshop)} />
                            </div>
                        </div>
                    </Col>
                    <Col lg md={6} className={classNames("")}>
                        <div data-aos="fade-in">
                            <p className="h-100 d-flex align-items-center">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas porro ipsa veniam voluptates numquam eveniet dignissimos ut atque? Nesciunt adipisci, nostrum deserunt fugit minima quidem
                                voluptatem obcaecati earum? Autem necessitatibus inventore optio debitis ut doloremque nesciunt, fugiat voluptates alias aut officia libero porro consequatur ipsam, minus dolor tenetur pariatur.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default SectionAboutUs;
