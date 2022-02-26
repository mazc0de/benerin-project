import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import LandingPage from "./pages/LandingPage";
import Register from "./pages/RegisterPage";
import Login from "./pages/LoginPage";
import ForgotPassword from "./pages/ForgotPasswordPage";
import ResetPassword from "./pages/ResetPasswordPage";
import AddVehicle from "./pages/AddVehicle";
import EditVehicle from "./pages/EditVehicle";
import GarasiUser from "./pages/GarasiUser";
import Dashboard from "./pages/Dashboard";
import PanggilMekanik from "./pages/PanggilMekanik";
import JadwalkanServis from "./pages/JadwalkanServis";
import RiwayatOrder from "./pages/RiwayatServis";
import Packages from "./pages/MitraPackages";
import CreatePackage from "./pages/CreatePackage";
import EditPackage from "./pages/EditPackage";
import MitraProfile from "./pages/MitraProfile";
import MitraEmployee from "./pages/MitraEmployee";
import CreateEmployee from "./pages/CreateEmployee";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/reset-password" element={<ResetPassword />} />
                    <Route path="/garasi" element={<GarasiUser />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/kendaraan/tambah-kendaraan" element={<AddVehicle />} />
                    <Route path="/kendaraan/edit-kendaraan/:id" element={<EditVehicle />} />
                    <Route path="/order/panggil-mekanik" element={<PanggilMekanik />} />
                    <Route path="/order/jadwalkan-servis" element={<JadwalkanServis />} />
                    <Route path="/order/riwayat-servis" element={<RiwayatOrder />} />
                    <Route path="/mitra/profile" element={<MitraProfile />} />
                    <Route path="/mitra/karyawan" element={<MitraEmployee />} />
                    <Route path="/mitra/packages" element={<Packages />} />
                    <Route path="/mitra/create-package" element={<CreatePackage />} />
                    <Route path="/mitra/edit-package/:id" element={<EditPackage />} />
                    <Route path="/mitra/create-employee" element={<CreateEmployee />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
