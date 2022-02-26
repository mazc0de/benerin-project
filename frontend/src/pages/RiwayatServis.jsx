import { Col, Container, Row } from "react-bootstrap";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import MenuRiwayatOrder from "../components/Order/MenuRiwayatOrder";
import ImgPending from "../assets/images/icons/pending.png";
import ImgOnProcess from "../assets/images/icons/on-process.png";
import ImgFinished from "../assets/images/icons/finished.png";
import ImgFailed from "../assets/images/icons/failed.png";
import databaseOrder from "./order.json";
import { useState } from "react";
import RiwayatOrder from "../components/Order/RiwayatOrder";

function RiwayatServis() {
    const [dataOrder, setDataOrder] = useState(databaseOrder);
    const [filterOrder, setFilterOrder] = useState(null);
    console.log("filter order : ", filterOrder);
    console.log("data order : ", dataOrder);
    const menus = [
        {
            id: 1,
            img: ImgPending,
            status: "Pending",
            link: "#",
        },
        {
            id: 2,
            img: ImgOnProcess,
            status: "On Process",
            link: "#",
        },
        {
            id: 3,
            img: ImgFinished,
            status: "Finished",
            link: "/#",
        },
        {
            id: 4,
            img: ImgFailed,
            status: "Failed",
            link: "#",
        },
    ];
    return (
        <>
            <Jumbotron />
            <Container>
                <Row className="g-1">
                    {menus.map((menu) => {
                        return (
                            <Col xs={3} key={menu.id}>
                                <MenuRiwayatOrder
                                    img={menu.img}
                                    title={menu.title}
                                    status={menu.status}
                                    handleClick={() => {
                                        setFilterOrder(menu.status);
                                    }}
                                />
                            </Col>
                        );
                    })}
                </Row>
                {/* <Row>{filterOrder === null ? "tidak ada order" : <RiwayatOrder orders={dataOrder.filter((item) => item.status === filterOrder)} />}</Row> */}
                <Row>{filterOrder === null ? "tidak ada order" : <RiwayatOrder orders={dataOrder.filter((item) => item.status === filterOrder).map((i) => i.status)} />}</Row>
            </Container>
        </>
    );
}

export default RiwayatServis;
