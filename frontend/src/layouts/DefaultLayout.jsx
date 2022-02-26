import { Container, Row, Col } from "react-bootstrap/";
import classNames from "classnames";
import style from "./DefaultLayout.module.css";

function DefaultLayout({ children }) {
  return (
    <section className={classNames(style.sectionPadding)} id="services">
      <Container>
        <Row className={classNames("justify-content-center")}>
          <Col lg={8}>
            <div className={classNames(style.sectionTitle)}>
              <h2>
                Layanan <span>Service</span>
              </h2>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="d-flex justify-content-center align-items-center">{children}</Container>
    </section>
  );
}

export default DefaultLayout;
