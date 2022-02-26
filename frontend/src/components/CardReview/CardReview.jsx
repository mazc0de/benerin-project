import { Container, Row, Col } from "react-bootstrap/";
import classNames from "classnames";
import imgProfile1 from "../../../src/assets/images/testimonial/1.jpg";
import style from "./CardReview.module.css";

function CardReview() {
    return (
        <section className={classNames(style.sectionPadding)}>
            <Container>
                <Row className={classNames("justify-content-center")}>
                    <Col lg={8}>
                        <div className={classNames(style.sectionTitle)}>
                            <h2>
                                Testimoni <span>Konsumen</span>
                            </h2>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className="d-flex justify-content-center align-items-center">
                <Row>
                    <Col lg md={6}>
                        <div data-aos="zoom-in">
                            <div className={classNames(style.testimonialsCarousel)}>
                                <div className={classNames(style.testimonialsItems)}>
                                    <div className={classNames(style.imgBox)}>
                                        <img classNames={classNames(style.imgBox, style.testimonialsItems)} src={imgProfile1} alt="" />
                                        <i className="fas fa-quote-right"></i>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ratione</p>
                                    <h3>Anre Franciscus</h3>
                                    <span>Pelanggan</span>
                                    <div className={classNames(style.rating)}>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg md={6}>
                        <div data-aos="zoom-in">
                            <div className={classNames(style.testimonialsCarousel)}>
                                <div className={classNames(style.testimonialsItems)}>
                                    <div className={classNames(style.imgBox)}>
                                        <img classNames={classNames(style.imgBox, style.testimonialsItems)} src={imgProfile1} alt="" />
                                        <i className="fas fa-quote-right"></i>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ratione</p>
                                    <h3>Anre Franciscus</h3>
                                    <span>Pelanggan</span>
                                    <div className={classNames(style.rating)}>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg md={12}>
                        <div data-aos="zoom-in">
                            <div className={classNames(style.testimonialsCarousel)}>
                                <div className={classNames(style.testimonialsItems)}>
                                    <div className={classNames(style.imgBox)}>
                                        <img classNames={classNames(style.imgBox, style.testimonialsItems)} src={imgProfile1} alt="" />
                                        <i className="fas fa-quote-right"></i>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ratione</p>
                                    <h3>Anre Franciscus</h3>
                                    <span>Pelanggan</span>
                                    <div className={classNames(style.rating)}>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default CardReview;
