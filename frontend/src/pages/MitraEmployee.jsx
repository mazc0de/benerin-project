import { Col, Container, Row } from "react-bootstrap";
import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import SectionProfileMitra from "../components/Mitra/SectionProfileMitra";

function MitraEmployee() {
    const handleDetailEmployee = () => {
        swal("Hello world!");
    };
    return (
        <>
            <Jumbotron />
            <Container>
                <SectionProfileMitra />
                <div className="d-flex justify-content-between">
                    <h3>Karyawan</h3>
                    <Link to="/mitra/create-employee">
                        <BsPlusLg className="text-secondary" />
                    </Link>
                </div>
                <Row>
                    <Col xs={3}>
                        <div onClick={handleDetailEmployee}>
                            <img src="https://picsum.photos/80" className="rounded-circle" />
                            <div className="text-center">Daffa</div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default MitraEmployee;
