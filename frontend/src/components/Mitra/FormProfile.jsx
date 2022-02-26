import { Form } from "react-bootstrap";
import Select from "react-select";
import BlueButton from "../Button/BlueButton";

function FormProfile(props) {
    const { provinces, cities } = props;
    return (
        <>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Nama Mitra</Form.Label>
                    <Form.Control type="text" placeholder="bener.in" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Nama Pemilik</Form.Label>
                    <Form.Control type="text" placeholder="Vathiya Rezky A" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Telepon</Form.Label>
                    <Form.Control type="text" placeholder="Vathiya Rezky A" />
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
                    <Form.Label>Alamat</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <BlueButton buttonText="Ubah Profile" />
            </Form>
        </>
    );
}

export default FormProfile;
