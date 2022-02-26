import Jumbotron from "../components/Jumbotron/Jumbotron";
import SectionProfileMitra from "../components/Mitra/SectionProfileMitra";
import { Container } from "react-bootstrap";
import CardListPackage from "../components/Mitra/CardListPackage";
import axios from "axios";
import { useEffect, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";

function MitraPackages() {
    const API_URL = process.env.REACT_APP_API_URI;
    const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");

    const [mitraPackages, setMitraPackages] = useState({});

    useEffect(() => {
        fetchAllPackages();
    }, []);

    const fetchAllPackages = () => {
        try {
            axios
                .get(`${API_URL}/api/v1/mitra-packages`, { headers: { Authorization: ACCESS_TOKEN } })
                .then((res) => {
                    setMitraPackages(res.data.data.mitraPackages);
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
                <SectionProfileMitra />
                <div className="d-flex justify-content-between">
                    <h3>Packages</h3>
                    <Link to="/mitra/create-package">
                        <BsPlusLg className="text-secondary" />
                    </Link>
                </div>
                {mitraPackages.length > 0 && (
                    <>
                        {mitraPackages.map((mitraPackage, index) => {
                            return (
                                <>
                                    <Link to={`/mitra/edit-package/${mitraPackage.id}`}>
                                        <CardListPackage mitraPackage={mitraPackage} />
                                    </Link>
                                </>
                            );
                        })}
                    </>
                )}
            </Container>
        </>
    );
}

export default MitraPackages;
