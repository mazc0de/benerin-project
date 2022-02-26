import { Row, Col, Card } from "react-bootstrap/";
import classNames from "classnames";
import style from "./CardLayananServis.module.css";
import icon1 from "../../assets/images/icons/icon-1.png";
import icon2 from "../../assets/images/icons/icon-2.png";
import icon3 from "../../assets/images/icons/icon-3.png";
function CardLayananServis() {
  return (
    <Row>
      <Col lg md={4} className="d-flex justify-content-center">
        <div data-aos="fade-up">
          <Card className={classNames(style.singleBox)}>
            <Card.Img src={icon1} className={classNames(style.imgCard)} />
            <Card.Title className={classNames(style.cardText)}>Service Umum</Card.Title>
          </Card>
        </div>
      </Col>
      <Col lg md={4} className="d-flex justify-content-center">
        <div data-aos="fade-up">
          <Card className={classNames(style.singleBox, "single-box")}>
            <Card.Img src={icon2} className={classNames(style.imgCard)} />
            <Card.Title className={classNames(style.cardText)}>Service Berkala</Card.Title>
          </Card>
        </div>
      </Col>
      <Col lg md={4} className="d-flex justify-content-center">
        <div data-aos="fade-up">
          <Card className={classNames(style.singleBox, "single-box")}>
            <Card.Img src={icon3} className={classNames(style.imgCard)} />
            <Card.Title className={classNames(style.cardText)}>Ganti Sparepart</Card.Title>
          </Card>
        </div>
      </Col>
    </Row>
  );
}

export default CardLayananServis;
