import axios from "axios";
import { useState } from "react";
import { Container } from "react-bootstrap";
import CardTitlePage from "../components/CardTitlePage/CardTitlePage";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import FormPackage from "../components/Mitra/FormPackage";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

function CreatePackage() {
    const navigate = useNavigate();
    const [dataPackage, setDataPackage] = useState({ mitraId: "", packageName: "", packageDetail: "", price: null });
    const [loading, setLoading] = useState(false);

    const API_URL = process.env.REACT_APP_API_URI;
    const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");

    const handleCreatePackage = (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                axios
                    .post(
                        `${API_URL}/api/v1/mitra-packages`,
                        {
                            packageName: dataPackage.packageName,
                            packageDetail: dataPackage.packageDetail,
                            price: dataPackage.price,
                        },
                        { headers: { Authorization: ACCESS_TOKEN, "Content-Type": "application/json" } }
                    )
                    .then((res) => {
                        console.log(res);
                        swal({
                            title: "Success!",
                            text: "Package anda berhasil di tambahkan",
                            icon: "success",
                            timer: 3000,
                            buttons: false,
                        }).then(() => {
                            navigate("/mitra/packages");
                        });
                    })
                    .catch((err) => {
                        console.log(err);
                        if (err.response.status === 401) {
                            swal({
                                title: "Failed!",
                                text: "Package anda gagal di tambahkan, mohon lengkapi form",
                                icon: "error",
                                timer: 3000,
                                buttons: false,
                            });
                        }
                    });
            }, 1000);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Jumbotron />
            <Container>
                <div className="my-3">
                    <CardTitlePage title="Tambah Package" />
                </div>

                <FormPackage handleCreatePackage={handleCreatePackage} loading={loading} dataPackage={dataPackage} setDataPackage={setDataPackage} />
            </Container>
        </>
    );
}

export default CreatePackage;
