import React from "react";
import { Card } from "react-bootstrap";

function RiwayatOrder({ orders }) {
    console.log(orders);
    return (
        <>
            <div>
                {/* {orders.map((order) => {
                    return <Card className="m-2">{order.name}</Card>;
                })} */}

                <div>
                    <Card>{orders}</Card>
                </div>
            </div>
        </>
    );
}

export default RiwayatOrder;
