import { useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { AiOutlineWarning } from "react-icons/ai";
import classNames from "classnames";
import style from "./OrderForm.module.css";
import { Link } from "react-router-dom";
import Select from "react-select";
import OrangeButton from "../Button/OrangeButton";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ImgCar from "../../assets/images/icons/car.png";
import ImgMotorBike from "../../assets/images/icons/motorbike.png";

function OrderForm(props) {
    const { vehicles, handleSelectVehicle, packages, handleOrderForm, handleSelectPackage, totalPrice, getTodayDate, loading, buttonText, setPaymentChecklist, isJadwalkanServis, setDataOrder, dataOrder } = props;
    const [startDate, setStartDate] = useState(new Date());
    const handleDate = (date) => {
        console.log(setStartDate(date));
    };
    return (
        <>
            <h5 className="text-center my-3">Order Panggil Mekanik</h5>
            <Form onSubmit={handleOrderForm}>
                <Form.Group className="mb-3">
                    {vehicles.length > 0 ? (
                        <>
                            <Form.Label>Pilih Kendaraan</Form.Label>
                            {vehicles.map((vehicle) => {
                                return (
                                    <label key={vehicle.id}>
                                        <input type="radio" name="vehicle" className={classNames(style.card_input_element)} />
                                        <div className={classNames(style.card_input)}>
                                            <Row>
                                                <Col xs={3}>
                                                    <div className="d-flex justify-content-center align-items-center">
                                                        <img src={vehicle.type === "CAR" ? ImgCar : ImgMotorBike} className={classNames(style.img_card)} />
                                                    </div>
                                                </Col>
                                                <Col xs={9}>
                                                    <div className="fw-bold">{vehicle.modelName}</div>
                                                    <div>{vehicle.modelYear}</div>
                                                    <div>{vehicle.transmissionType}</div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </label>
                                );
                            })}

                            {/* <Select options={vehicles} onChange={handleSelectVehicle} /> */}
                        </>
                    ) : (
                        <>
                            <Card>
                                <Card.Body>
                                    <Row>
                                        <Col xs={3}>
                                            <AiOutlineWarning className={classNames(style.icons)} />
                                        </Col>
                                        <Col xs={9}>
                                            <div className="">Kendaraan tidak ditemukan</div>
                                            <Link to="/kendaraan/tambah-kendaraan">
                                                <div className="text-decoration-underline">tambah kendaraan</div>
                                            </Link>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </>
                    )}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Pilih Packages</Form.Label>
                    <Select isMulti name="package" options={packages} className="basic-multi-select" classNamePrefix="select" onChange={handleSelectPackage} />
                </Form.Group>
                {isJadwalkanServis && (
                    <>
                        <Form.Group className="mb-3">
                            <Form.Label>Date</Form.Label>
                            <DatePicker selected={startDate} onChange={handleDate} className="form-control" />
                        </Form.Group>
                    </>
                )}

                <div className={classNames(style.bottom_section)}>
                    <Row>
                        <Col xs={6}>
                            <div>Subtotal</div>
                        </Col>
                        <Col xs={6} className="mb-2">
                            <div className="text-end fw-bold">Rp. {totalPrice},-</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} className="mb-2">
                            <div>Tanggal</div>
                        </Col>
                        <Col xs={6}>
                            <div className="text-end">{getTodayDate}</div>
                        </Col>
                    </Row>
                    <div>
                        <div>Payment Method</div>

                        <div className="mb-3">
                            <Form.Check
                                inline
                                label="Cash"
                                name="group1"
                                type="radio"
                                id={`inline-radio-1`}
                                onChange={(e) => {
                                    setPaymentChecklist(true);
                                }}
                            />
                        </div>
                    </div>

                    <OrangeButton loading={loading} buttonText={buttonText} />
                </div>
            </Form>
        </>
    );
}

export default OrderForm;
