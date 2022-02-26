import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Container, Form } from "react-bootstrap";
import CardTitlePage from "../components/CardTitlePage/CardTitlePage";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import FormEmployee from "../components/Mitra/FormEmployee";

function CreateEmployee() {
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
                <div className="my-3">
                    <CardTitlePage title="Tambah Karyawan" />
                </div>
                <div className="mb-3">
                    <FormEmployee provinces={provinces} cities={cities} />
                </div>
            </Container>
        </>
    );
}

export default CreateEmployee;
