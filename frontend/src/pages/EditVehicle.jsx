import { useState, useEffect } from "react";
import EditVehicleForm from "../components/Vehicle/VehicleForm";
import { Container } from "react-bootstrap";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import swal from "sweetalert";
import { useParams, useNavigate } from "react-router-dom";

function EditVehicle() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [brands, setBrands] = useState([]);
    const [selectedBrandName, setSelectedBrandName] = useState("");
    const [selectedYear, setSelectedYear] = useState("");
    const [isEditForm, setIsEditForm] = useState(true);
    const [dataVehicle, setDataVehicle] = useState({ brandId: 0, modelName: "", modelYear: "", type: "", transmissionType: "" });

    const { currentUser, logout } = useAuth();
    const userId = currentUser?.uid;

    const API_URL = process.env.REACT_APP_API_URI;
    const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");

    const [loading, setLoading] = useState(false);

    const fecthAllBrands = async () => {
        const res = await axios.get(`${API_URL}/api/v1/brands`, { headers: { Authorization: ACCESS_TOKEN } });
        const data = res.data.data.brands;

        const option = data.map((item) => ({
            value: item.id,
            label: item.brandName,
        }));
        setBrands(option);
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

    const getVehicleById = () => {
        try {
            axios.get(`${API_URL}/api/v1/vehicles/${id}`, { headers: { Authorization: ACCESS_TOKEN } }).then((res) => {
                setDataVehicle(res.data.data.vehicle);
                setSelectedBrandName(res.data.data.vehicle.brand.brandName);
                setSelectedYear(res.data.data.vehicle.year);
            });
        } catch (error) {}
    };

    const handleEditVehicle = (e) => {
        e.preventDefault();
        console.log(dataVehicle);
        console.log("edit hit");
        try {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                axios
                    .put(
                        `${API_URL}/api/v1/vehicles/${id}`,
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
                        setDataVehicle({ brandId: 0, modelName: "", modelYear: "", type: "", transmissionType: "" });

                        swal({
                            title: "Success!",
                            text: "Kendaraan anda berhasil diubah!",
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
                                text: "Kendaraan anda gagal diubah, mohon lengkapi form!",
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

    useEffect(() => {
        fecthAllBrands();
        getVehicleById();
    }, []);

    return (
        <>
            {/* <NavbarUser /> */}
            <Jumbotron />
            <Container>
                <EditVehicleForm
                    title="Edit Kendaraan"
                    brands={brands}
                    dataVehicle={dataVehicle}
                    setDataVehicle={setDataVehicle}
                    years={generateYear()}
                    buttonText="Ubah Kendaraan"
                    loading={loading}
                    selectedBrandName={selectedBrandName}
                    setSelectedBrandName={setSelectedBrandName}
                    selectedYear={selectedYear}
                    handleForm={handleEditVehicle}
                    setSelectedYear={setSelectedYear}
                    isEditForm={isEditForm}
                />
            </Container>
        </>
    );
}

export default EditVehicle;
