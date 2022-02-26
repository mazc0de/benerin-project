import { useEffect, useState, Fragment } from "react";
import CardVehicle from "../components/CardVehicle/CardVehicle";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import swal from "sweetalert";

function GarasiUser() {
    const { currentUser, logout } = useAuth();
    const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
    const API_URL = process.env.REACT_APP_API_URI;
    const userId = currentUser?.uid;

    const [stateStatus, setStateStatus] = useState(false);

    const [vehicles, setVehicles] = useState([]);
    useEffect(() => {
        fetchAllVehicle();
    }, [stateStatus]);

    const fetchAllVehicle = () => {
        try {
            axios
                .get(`${API_URL}/api/v1/vehicles/`, { headers: { Authorization: ACCESS_TOKEN } })
                .then((res) => {
                    console.log(res.data.data.vehicles);
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

    const handleDeleteVehicle = (vehicleId) => {
        swal({
            title: "Konfirmasi Hapus",
            text: "Apakah anda yakin ingin menghapus kendaraan ini?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            console.log(vehicleId);

            if (willDelete) {
                try {
                    axios
                        .delete(`${API_URL}/api/v1/vehicles/${vehicleId}`, { headers: { Authorization: ACCESS_TOKEN } })
                        .then((res) => {
                            console.log(res);
                            console.log("delete sukses");
                            setStateStatus(!stateStatus);
                            swal("Kendaraan berhasil dihapus!", {
                                icon: "success",
                            });
                        })
                        .catch((err) => {
                            if (err.response.status === 401) {
                                console.log(err);
                            }
                        });
                } catch (error) {
                    console.log("error" + error);
                }
            } else {
                swal("Your imaginary file is safe!");
            }
        });
    };
    return (
        <Fragment>
            <Jumbotron />
            <CardVehicle vehicles={vehicles} buttonText="Tambah Kendaraan" handleDeleteVehicle={handleDeleteVehicle} />
        </Fragment>
    );
}

export default GarasiUser;
