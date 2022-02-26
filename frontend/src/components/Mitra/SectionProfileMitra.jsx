import classNames from "classnames";
import { Col, Row } from "react-bootstrap";
import style from "./SectionProfileMitra.module.css";
import { BsGear } from "react-icons/bs";

function SectionProfileMitra() {
    return (
        <>
            <div className={classNames(style.section_profile_mitra)}>
                <Row>
                    <Col xs={3}>
                        <div className="d-flex justify-content-center align-items-center">
                            <img src="https://picsum.photos/80" />
                        </div>
                    </Col>
                    <Col xs={8}>
                        <Row>
                            <Col>
                                <div className="d-flex justify-content-center align-items-start flex-column">
                                    <div className={classNames(style.mitra_name)}>
                                        bener<b>.in</b>
                                    </div>
                                    <div className="text-muted">Mitra</div>
                                    <div className="">Jakarta</div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={1}>
                        <BsGear />
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default SectionProfileMitra;
