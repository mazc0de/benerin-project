import { Container, Card, Row, Col } from "react-bootstrap";
import Icon from "../../assets/images/icons/icon.png";
import IconEdit from "../../assets/images/icons/icon-edit.png";
import IconDelete from "../../assets/images/icons/icon-delete.png";
import IconSort from "../../assets/images/icons/icon-sort.png";
import classNames from "classnames";
import style from "./CardVehicle.module.css";
import OrangeButton from "../Button/OrangeButton";
import { Link } from "react-router-dom";
import { AiOutlineWarning } from "react-icons/ai";

function CardVehicle({ vehicles, buttonText, handleDeleteVehicle }) {
    return (
        <Container className="w-100">
            <Row className="d-flex justify-content-center">
                <Col className="col-xl-12 col-lg-10 col-sm-8 col-md-6 mx-2 my-2 d-flex flex-column justify-content-start aling-items-center">
                    <h1 className={classNames(style.textHeader)}>garasi saya</h1>
                    <div className="col-xl-12 col-sm-12 mx-2 my-2 d-flex justify-content-start w-100">
                        <img src={IconSort} alt="" className={classNames(style.iconSort)} />
                        <h5 className={classNames(style.textSort, "mx-3")}>urutkan berdasarkan terbaru</h5>
                    </div>
                </Col>
                {vehicles.length > 0 ? (
                    <>
                        {vehicles.map((item, index) => {
                            return (
                                <Col xs={12} key={index} className="mx-5 my-2 px-2 py-2 d-flex justify-content-center">
                                    <Card className={classNames(style.cardVehicle)}>
                                        <Card.Body className="d-flex">
                                            <Card.Img src={Icon} className={classNames(style.itemIcon, "mx-3 w-75")} />
                                            <div className="d-flex flex-column justify-content-center w-100">
                                                <Card.Text className={classNames(style.cardText, "my-1 mx-2 px-3")}>{item.brandName}</Card.Text>
                                                <Card.Text className={classNames(style.cardText, "my-1 mx-2 px-3")}>{item.type}</Card.Text>
                                                <Card.Text className={classNames(style.cardText, "my-1 mx-2 px-3")}>{item.modelName}</Card.Text>
                                                <Card.Text className={classNames(style.cardText, "my-1 mx-2 px-3")}>{item.transmissionType}</Card.Text>
                                                <Card.Text className={classNames(style.cardText, "my-1 mx-2 px-3")}>{item.modelYear}</Card.Text>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-center ">
                                                <Link to={`/kendaraan/edit-kendaraan/${item.id}`}>
                                                    <Card.Img src={IconEdit} className={classNames(style.btnEdit, "mx-2")} />
                                                </Link>
                                                <Card.Img src={IconDelete} className={classNames(style.btnEdit, "mx-2")} onClick={handleDeleteVehicle.bind(this, item.id)} />
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            );
                        })}
                    </>
                ) : (
                    <>
                        <Container>
                            <Card>
                                <Card.Body>
                                    <AiOutlineWarning className={classNames(style.icons)} />
                                    <span className="px-3">Kendaraan tidak ditemukan</span>
                                </Card.Body>
                            </Card>
                        </Container>
                    </>
                )}

                <div className={classNames(style.button_add_vehicle)}>
                    <h2 className={classNames(style.textBtn, "my-2")}>Apakah anda ingin menambahkan kendaraan lain?</h2>
                    <Link to="/kendaraan/tambah-kendaraan">
                        <OrangeButton buttonText={buttonText} />
                    </Link>
                </div>
            </Row>
        </Container>
    );
}

export default CardVehicle;
