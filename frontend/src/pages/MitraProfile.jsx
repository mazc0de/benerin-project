import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import FormProfile from "../components/Mitra/FormProfile";

function MitraProfile() {
    const [provinces, setProvinces] = useState("");
    const [cities, setCities] = useState("");

    const API_URL = process.env.REACT_APP_API_URI;
    const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");

    useEffect(() => {
        getAllProvinces();
        getAllCities();
    }, []);

    const getAllProvinces = async () => {
        try {
            const res = await axios.get(`${API_URL}/api/v1/province`, { headers: { Authorization: ACCESS_TOKEN } });
            const data = res.data.data.provinces;

            const option = data.map((item) => ({
                value: item.id,
                label: item.provinceName,
            }));
            setProvinces(option);
        } catch (error) {
            console.log(error);
        }
    };
    const getAllCities = async () => {
        try {
            const res = await axios.get(`${API_URL}/api/v1/cities`, { headers: { Authorization: ACCESS_TOKEN } });
            const data = res.data.data.city;

            const option = data.map((item) => ({
                value: item.id,
                label: item.cityName,
            }));
            setCities(option);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Jumbotron />
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="d-flex justify-content-center my-3">
                            <img src="https://picsum.photos/80" />
                        </div>
                        <h5 className="text-center">
                            bener<b>.in</b>
                        </h5>
                        <p className="text-center text-muted">mitra</p>
                        <hr />
                    </Col>
                </Row>
                <div className="mb-5">
                    <FormProfile provinces={provinces} cities={cities} />
                </div>
            </Container>
        </>
    );
}

export default MitraProfile;
