import { useState } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import Select from "react-select";
import classNames from "classnames";
import style from "./Vehicle.module.css";
import CarImage from "../../assets/images/icons/car.png";
import MotorBikeImage from "../../assets/images/icons/motorbike.png";
import AutomaticTransmission from "../../assets/images/icons/automatic-transmission.png";
import ManualTransmission from "../../assets/images/icons/manual-transmission.png";
import OrangeButton from "../Button/OrangeButton";

function VehicleForm(props) {
    const { brands, dataVehicle, setDataVehicle, years, buttonText, handleForm, loading, selectedBrandName, setSelectedBrandName, isEditForm } = props;

    const [isCardMobilChecked, setIsCardMobilChecked] = useState(false);
    const [isCardMotorChecked, setIsCardMotorChecked] = useState(false);
    const [isAutomaticTransmissionChecked, setIsAutomaticTransmissionChecked] = useState(false);
    const [isManualTransmissionChecked, setIsManualTransmissionChecked] = useState(false);

    const handleCardMobil = (e) => {
        setIsCardMobilChecked(true);
        setIsCardMotorChecked(false);
        setDataVehicle({ ...dataVehicle, type: "CAR" });
    };

    const handleCardMotor = () => {
        setIsCardMobilChecked(false);
        setIsCardMotorChecked(true);
        setDataVehicle({ ...dataVehicle, type: "MOTORCYCLE" });
    };

    const handleAutomaticTransmission = () => {
        setIsAutomaticTransmissionChecked(true);
        setIsManualTransmissionChecked(false);
        setDataVehicle({ ...dataVehicle, transmissionType: "AUTOMATIC" });
    };

    const handleManualTransmission = () => {
        setIsAutomaticTransmissionChecked(false);
        setIsManualTransmissionChecked(true);
        setDataVehicle({ ...dataVehicle, transmissionType: "MANUAL" });
    };

    const handleChangeBrandNameOptionEdited = (e) => {
        console.log(e);
        setSelectedBrandName(e.label);
        setDataVehicle({ ...dataVehicle, brandId: e.value });
    };

    const handleChangeBrandNameOption = (e) => {
        console.log(e);

        setDataVehicle({ ...dataVehicle, brandId: e.value });
    };
    const handleChangeYearOption = (e) => {
        setDataVehicle({ ...dataVehicle, modelYear: e.value });
    };

    return (
        <>
            <Form onSubmit={handleForm}>
                <Form.Group className="mb-3">
                    <Form.Label>Tipe Kendaraan</Form.Label>
                    <Row className="d-flex justify-content-center mb-3">
                        <Col xs={4}>
                            <Card onClick={handleCardMobil}>
                                <Card.Body className={classNames((isCardMobilChecked && style.selected_card) || dataVehicle?.type === "CAR" ? style.selected_card : null, "p-2")}>
                                    <Card.Img src={CarImage}></Card.Img>
                                    <Card.Text className="fw-bold text-center">Mobil</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={4}>
                            <Card onClick={handleCardMotor}>
                                <Card.Body className={classNames((isCardMotorChecked && style.selected_card) || dataVehicle?.type === "MOTORCYCLE" ? style.selected_card : null, "p-2")}>
                                    <Card.Img src={MotorBikeImage}></Card.Img>
                                    <Card.Text className="fw-bold text-center">Motor</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="transmisi">Transmisi</Form.Label>
                    <Row className="d-flex justify-content-center mb-3">
                        <Col xs={4}>
                            <Card onClick={handleAutomaticTransmission}>
                                <Card.Body className={classNames((isAutomaticTransmissionChecked && style.selected_card) || dataVehicle?.transmissionType === "AUTOMATIC" ? style.selected_card : null, "p-2")}>
                                    <Card.Img src={AutomaticTransmission}></Card.Img>
                                    <Card.Text className={classNames(style.custom_card_text, "fw-bold text-center")}>Automatic</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={4}>
                            <Card onClick={handleManualTransmission}>
                                <Card.Body className={classNames((isManualTransmissionChecked && style.selected_card) || dataVehicle?.transmissionType === "MANUAL" ? style.selected_card : null, "p-2")}>
                                    <Card.Img src={ManualTransmission}></Card.Img>
                                    <Card.Text className={classNames(style.custom_card_text, "fw-bold text-center")}>Manual</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="namaModel">Nama Model</Form.Label>
                    <Form.Control
                        type="text"
                        name="namaModel"
                        id="namaModel"
                        placeholder="Model Kendaraan Anda"
                        value={dataVehicle.modelName}
                        onChange={(e) => {
                            setDataVehicle({ ...dataVehicle, modelName: e.target.value });
                        }}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="brandName">Brand Name</Form.Label>
                    {isEditForm === true ? (
                        <Select options={brands} onChange={handleChangeBrandNameOptionEdited} value={{ value: selectedBrandName, label: selectedBrandName }} />
                    ) : (
                        <Select options={brands} onChange={handleChangeBrandNameOption} />
                    )}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="Tahun">Tahun</Form.Label>
                    {isEditForm === true ? <Select options={years} onChange={handleChangeYearOption} value={{ value: dataVehicle.modelYear, label: dataVehicle.modelYear }} /> : <Select options={years} onChange={handleChangeYearOption} />}
                </Form.Group>

                <div className="mt-3 mb-4">
                    <OrangeButton loading={loading} buttonText={buttonText} />
                </div>
            </Form>
        </>
    );
}

export default VehicleForm;
