import { useState, useEffect } from "react";
import CreateVehicleForm from "../components/Vehicle/VehicleForm";
import { Container } from "react-bootstrap";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import CardTitlePage from "../components/CardTitlePage/CardTitlePage";

function AddVehicle() {
    const navigate = useNavigate();
    const [brands, setBrands] = useState([]);
    const [dataVehicle, setDataVehicle] = useState({ brandId: 0, modelName: "", modelYear: "", type: "", transmissionType: "" });

    const { currentUser, logout } = useAuth();
    const userId = currentUser?.uid;

    const API_URL = process.env.REACT_APP_API_URI;
    const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");

    const [stateStatus, setStateStatus] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isEditForm, setIsEditForm] = useState(false);

    useEffect(() => {
        fecthAllBrands();
    }, []);

    const fecthAllBrands = async () => {
        try {
            const res = await axios.get(`${API_URL}/api/v1/brands`, { headers: { Authorization: ACCESS_TOKEN } });
            const data = res.data.data.brands;

            const option = data.map((item) => ({
                value: item.id,
                label: item.brandName,
            }));
            setBrands(option);
        } catch (error) {
            console.log(error);
        }
    };

    const generateYear = () => {
        const initialYear = 1990;
        let currentYear = new Date().getFullYear();

        let i = 0;

        var years = [];
        for (i = initialYear; i <= currentYear; i = i + 1) {
            years.push({ value: i.toString(), label: i.toString() });
        }
        return years;
    };

    const handleCreateVehicle = (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                axios
                    .post(
                        `${API_URL}/api/v1/vehicles/`,
                        {
                            brandId: Number(dataVehicle.brandId),
                            modelName: dataVehicle.modelName,
                            modelYear: dataVehicle.modelYear,
                            type: dataVehicle.type,
                            transmissionType: dataVehicle.transmissionType,
                        },
                        { headers: { Authorization: ACCESS_TOKEN, "Content-Type": "application/json" } }
                    )
                    .then((response) => {
                        console.log(response);

                        swal({
                            title: "Success!",
                            text: "Kendaraan anda berhasil di tambahkan",
                            icon: "success",
                            timer: 3000,
                            buttons: false,
                        }).then(() => {
                            navigate("/garasi");
                        });
                    })
                    .catch((err) => {
                        if (err.response.status === 401) {
                            swal({
                                title: "Failed!",
                                text: "Kendaraan anda gagal di tambahkan, mohon lengkapi form",
                                icon: "error",
                                timer: 3000,
                                buttons: false,
                            });
                        }
                    });
            }, 1000);
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <>
            {/* <NavbarUser /> */}
            <Jumbotron />
            <Container>
                <CardTitlePage title="Tambah Kendaraan" />
                <CreateVehicleForm brands={brands} dataVehicle={dataVehicle} setDataVehicle={setDataVehicle} years={generateYear()} buttonText="Tambah Kendaraan" handleForm={handleCreateVehicle} loading={loading} isEditForm={isEditForm} />
            </Container>
        </>
    );
}

export default AddVehicle;
