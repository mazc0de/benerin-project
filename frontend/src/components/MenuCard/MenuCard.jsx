import { Card } from "react-bootstrap";
import classNames from "classnames";
import style from "./MenuCard.module.css";
import { useNavigate } from "react-router-dom";

function MenuCard(props) {
    const navigate = useNavigate();
    const { title, img, link } = props;
    return (
        <>
            <div>
                <Card
                    className={classNames(style.custom_card, "p-3")}
                    onClick={() => {
                        navigate(`${link}`);
                    }}
                >
                    <Card.Body>
                        <div className="d-flex justify-content-center align-items-center">
                            <Card.Img src={img} className={classNames(style.img_card)} />
                        </div>
                    </Card.Body>
                </Card>
                <p className="text-center fw-bold">{title}</p>
            </div>
        </>
    );
}

export default MenuCard;
