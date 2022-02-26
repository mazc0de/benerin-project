import { Form } from "react-bootstrap";
import BlueButton from "../Button/BlueButton";
import RedButton from "../Button/RedButton";

function FormPackage(props) {
    const { handleCreatePackage, loading, dataPackage, setDataPackage, isEditForm, handleDeletePackage, handleEditPackage } = props;
    console.log(dataPackage.packageName);
    return (
        <>
            <Form onSubmit={isEditForm === true ? handleEditPackage : handleCreatePackage}>
                <Form.Group className="mb-3">
                    <Form.Label>Name Perbaikan</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Nama Perbaikan"
                        value={dataPackage.packageName}
                        onChange={(e) => {
                            setDataPackage({ ...dataPackage, packageName: e.target.value });
                        }}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Detail</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={dataPackage.packageDetail}
                        onChange={(e) => {
                            setDataPackage({ ...dataPackage, packageDetail: e.target.value });
                        }}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Harga</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="100000"
                        value={dataPackage.price}
                        onChange={(e) => {
                            setDataPackage({ ...dataPackage, price: e.target.value });
                        }}
                    />
                </Form.Group>
                {isEditForm === true ? (
                    <>
                        <BlueButton buttonText="Edit Package" loading={loading} />
                    </>
                ) : (
                    <>
                        <BlueButton buttonText="Tambah Package" loading={loading} />
                    </>
                )}
            </Form>
            <div className="my-2">
                <div onClick={handleDeletePackage}>
                    <RedButton buttonText="Hapus Package" loading={loading} />
                </div>
            </div>
        </>
    );
}

export default FormPackage;
