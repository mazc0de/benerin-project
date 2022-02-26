import React from "react";
import { Card } from "react-bootstrap";
import style from "./CardTitlePage.module.css";

function CardTitlePage(props) {
    const { title } = props;
    return <h3 className={style.card_text}>{title}</h3>;
}

export default CardTitlePage;
