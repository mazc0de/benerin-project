import Select from "react-select";
import { Form } from "react-bootstrap";
import BlueButton from "../Button/BlueButton";

function FormEmployee(props) {
    const { provinces, cities } = props;

    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Nama</Form.Label>
                <Form.Control type="text" placeholder="Nama Karyawan" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Provinsi</Form.Label>
                <Select options={provinces} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>City</Form.Label>
                <Select options={cities} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="employee@gmail.com" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="******" />
            </Form.Group>
            <BlueButton buttonText="Tambah Karyawan" />
        </Form>
    );
}

export default FormEmployee;
