import classNames from "classnames";
import React from "react";
import { Card } from "react-bootstrap";
import style from "./MenuRiwayatOrder.module.css";

function MenuRiwayatOrder(props) {
    const { img, status, handleClick } = props;
    return (
        <>
            <Card className={classNames(style.custom_card, "d-flex justify-content-center align-items-center mt-2")} onClick={handleClick}>
                <Card.Img src={img} className={classNames(style.card_img)} />
                <Card.Text className={classNames(style.card_text)}>{(status, handleClick)}</Card.Text>
            </Card>
        </>
    );
}

export default MenuRiwayatOrder;
