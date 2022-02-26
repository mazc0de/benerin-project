import classNames from "classnames";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import ImgMobil from "../../assets/images/icons/car.png";
import style from "./VehicleCardList.module.css";

function VehicleCardList(props) {
    const { vehicle } = props;

    return (
        <>
            <Card className={classNames(style.custom_card, "mb-2")}>
                <Card.Body>
                    <Row>
                        <Col xs={4} className="d-flex justify-content-center align-items-center">
                            <Card.Img src={ImgMobil} className={classNames(style.card_image)}></Card.Img>
                        </Col>
                        <Col xs={8}>
                            <div className={classNames(style.card_body, "d-flex  align-items-start flex-column")}>
                                <p className="fw-bold">{vehicle.modelName}</p>
                                <p>{vehicle.modelYear}</p>
                                <p>{vehicle.type}</p>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
}

export default VehicleCardList;
