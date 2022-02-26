import classNames from "classnames";
import { Card, Col, Form, Row } from "react-bootstrap";
import ImgMaintenance from "../../assets/images/icons/maintenance.png";
import style from "./CardListPackage.module.css";
import Switch from "react-switch";
import { useState } from "react";

function CardListPackage(props) {
    const { mitraPackage } = props;

    const [checked, setChecked] = useState(true);
    const handleChange = (nextChecked) => {
        setChecked(nextChecked);
    };

    return (
        <Card className="mb-2">
            <Card.Body>
                <Row>
                    <Col xs={3}>
                        <Card.Img src={ImgMaintenance} />
                    </Col>
                    <Col xs={7}>
                        <div className="fw-bold">{mitraPackage.packageName}</div>
                        <div className={classNames(style.custom_card_text)}>{mitraPackage.packageDetail}</div>
                        <div>Rp {mitraPackage.price},-</div>
                    </Col>
                    <Col xs={2} className="d-flex justify-content-center align-items-center">
                        <Switch onChange={handleChange} checked={mitraPackage.packageStatus} offColor="#D82148" />
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default CardListPackage;
