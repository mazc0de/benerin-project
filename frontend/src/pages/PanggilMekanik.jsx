import axios from "axios";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import OrderForm from "../components/Order/OrderForm";

function PanggilMekanik() {
    const [vehicles, setVehicles] = useState([]);
    const [packages, setPackages] = useState([]);
    const [selectVehicle, setSelectVehicle] = useState([]);
    const [selectedPackage, setSelectedPackage] = useState([]);
    const [selectedPackagePrice, setSelectedPackagePrice] = useState([]);

    const [loading, setLoading] = useState(false);

    const [paymentChecklist, setPaymentChecklist] = useState(false);

    const [dataOrder, setDataOrder] = useState({ vehicleId: "", mitraId: "", mitraEmployeeId: "", orderType: "DARURAT", appointmentDate: new Date(), packageIds: [] });

    const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
    const API_URL = process.env.REACT_APP_API_URI;

    useEffect(() => {
        fetchAllVehicle();
        fetchAllPackages();
    }, []);
    const fetchAllVehicle = () => {
        try {
            axios
                .get(`${API_URL}/api/v1/vehicles/`, { headers: { Authorization: ACCESS_TOKEN } })
                .then((res) => {
                    return setVehicles(res.data.data.vehicles);
                })
                .catch((err) => {
                    if (err.response.status === 401) {
                        console.log("Kendaraan tidak ditemukan ");
                        return;
                    }
                    console.log(err);
                    if (err.response.status === 500) {
                        console.log(err);
                        return;
                    }
                });
        } catch (error) {
            console.log(error.message);
        }
    };

    const fetchAllPackages = async () => {
        try {
            const res = await axios.get(`${API_URL}/api/v1/mitra-packages`, { headers: { Authorization: ACCESS_TOKEN } });
            const data = res.data.data.mitraPackages;

            const option = data.map((item) => ({
                value: item.id,
                label: item.packageName,
                price: item.price,
            }));

            setPackages(option);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSelectVehicle = (e) => {
        setSelectVehicle(e.label);
        setDataOrder({ ...dataOrder, vehicleId: e.value });
    };

    const handleSelectPackage = (e) => {
        let i;
        const pilihPackage = [];
        const hargaPackage = [];
        for (i = 0; i < e.length; i++) {
            pilihPackage.push(e[i].value);
            hargaPackage.push(e[i].price);
        }
        setSelectedPackage(pilihPackage);
        setSelectedPackagePrice(hargaPackage);
    };

    const countTotalPrice = () => {
        let totalHarga = 0;
        for (let o = 0; o < selectedPackagePrice.length; o++) {
            totalHarga += selectedPackagePrice[o];
        }

        let reverse = totalHarga.toString().split("").reverse().join(""),
            ribuan = reverse.match(/\d{1,3}/g);
        ribuan = ribuan.join(".").split("").reverse().join("");
        return ribuan;
    };

    const getTodayDate = () => {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!

        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = "0" + dd;
        }
        if (mm < 10) {
            mm = "0" + mm;
        }
        today = dd + "/" + mm + "/" + yyyy;

        return today;
    };

    const handleOrderForm = (e) => {
        e.preventDefault();
        setLoading(true);
        console.log(paymentChecklist);

        console.log({ ...dataOrder, packageIds: selectedPackage });

        try {
            axios
                .post(
                    `${API_URL}/api/v1/orders`,
                    {
                        orderType: "URGENT", // urgent dan general
                        appointmentDate: new Date(),
                        packageIds: selectedPackage,
                    },
                    { headers: { Authorization: ACCESS_TOKEN, "Content-Type": "application/json" } }
                )
                .then((res) => {
                    console.log(res);
                });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Jumbotron />
            <Container>
                <OrderForm
                    vehicles={vehicles}
                    handleSelectVehicle={handleSelectVehicle}
                    packages={packages}
                    handleOrderForm={handleOrderForm}
                    handleSelectPackage={handleSelectPackage}
                    totalPrice={countTotalPrice()}
                    getTodayDate={getTodayDate()}
                    loading={loading}
                    buttonText="Panggil Mekanik"
                    setPaymentChecklist={setPaymentChecklist}
                />
            </Container>
        </>
    );
}

export default PanggilMekanik;
