import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CardTitlePage from "../components/CardTitlePage/CardTitlePage";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import FormPackage from "../components/Mitra/FormPackage";

function EditPackage() {
    const { id } = useParams();
    const API_URL = process.env.REACT_APP_API_URI;
    const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");

    const [dataPackage, setDataPackage] = useState({ mitraId: "", packageName: "", packageDetail: "", price: null });
    const [loading, setLoading] = useState(false);
    const [isEditForm, setIsEditForm] = useState(true);

    useEffect(() => {
        fetchAllPackages();
    }, []);

    const handleEditPackage = (e) => {
        e.preventDefault();
        console.log(dataPackage);
        console.log("edit");
    };

    const handleDeletePackage = () => {
        console.log("delete");
    };

    const fetchAllPackages = () => {
        try {
            axios
                .get(`${API_URL}/api/v1/mitra-packages/${id}`, { headers: { Authorization: ACCESS_TOKEN } })
                .then((res) => {
                    console.log(res.data.data.mitraPackage);
                    setDataPackage(res.data.data.mitraPackage);
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Jumbotron />
            <Container>
                <div className="my-3">
                    <CardTitlePage title="Edit Package" />
                </div>

                <FormPackage handleEditPackage={handleEditPackage} loading={loading} dataPackage={dataPackage} setDataPackage={setDataPackage} isEditForm={isEditForm} handleDeletePackage={handleDeletePackage} />
            </Container>
        </>
    );
}

export default EditPackage;
