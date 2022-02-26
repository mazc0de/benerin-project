import { Container, Row, Col, Card } from "react-bootstrap";
import classNames from "classnames";
import style from "./CardProfile.module.css";
import Profile from "../../assets/images/icons/profile.png";
import iconSetting from "../../assets/images/icons/icon-setting.png";

function CardProfile() {
    return (
        <Container className="d-flex justify-content-center">
            <Row className="d-flex justify-content-center">
                <Col classNames="col-xl-12 col-sm-12 col-12 mx-2 my-3 d-flex justify-content-center align-items-center">
                    <Card className={classNames(style.CardProfile, "my-3 border-0")}>
                        <Card.Body className="d-flex">
                            <Card.Img src={Profile} className={classNames(style.imgProfile)} />
                            <div className="d-flex flex-column justify-content-center">
                                <Card.Text className={classNames(style.textName, "my-1 mx-4")}>Anre Franciscus</Card.Text>
                                <Card.Text className={classNames(style.textLocation, "my-1 mx-4")}>Tangerang, Banten</Card.Text>
                                <Card.Text className={classNames(style.textPhone, "my-1 mx-4")}>0812-8128-128</Card.Text>
                                <a className={classNames(style.textHistory, "my-1 mx-4")}>view order history</a>
                            </div>
                            <div className="d-flex flex-column align-items-end mx-4">
                                <Card.Img src={iconSetting} className={classNames(style.iconSetting, "mx-auto my-2 ml-5")} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default CardProfile;
