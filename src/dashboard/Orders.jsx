import { Link } from "react-router-dom";
import '../styles/Dashboard/orders.css'
import { useEffect, useState } from "react";
import axios from 'axios'
function Orders() {
    const [allOrders, setAllOrders] = useState([]

    )
    useEffect(() => {
        axios.get("http://localhost:4001/allOrders").then((res) => {
            // console.log('Orders ---->', res.data)
            setAllOrders(res.data)
        })
    }, [])



    const hadnleDelete = (id) => {
 
        if (window.confirm("Are you sure you want to delete this order?")) {

            axios.delete("http://localhost:4001/deleteOrders/" + id)
                .then((res) => {
                    console.log(res.data.data)
                     alert("Order deleted successfully!");
                    setAllOrders(prev => prev.filter(order => order._id !== id));
                })
                .catch((err) => {
                    console.log("Delete Erorr ---->", err)
                })
        }
    }
    return (
        <div className="orders">
            <h3 style={{ color: "#424242" }}>Orders ({allOrders.length})</h3>
            <br />
            {allOrders.length > 0 ?
                <div className="orders-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Stcok Name</th>
                                <th>Price (₹)</th>
                                <th>Qty.</th>
                                <th>Total Value (₹)</th>
                                <th>Mode (B/S)</th>
                            </tr>
                        </thead>
                        <tbody>

                            {allOrders.map((item, i) => {
                                const totalVal = item.price * item.qty
                                const modeColor = item.mode === "BUY" ? "green" : "red"

                                return (
                                    <tr key={i}>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>{item.qty}</td>
                                        <td>{totalVal}</td>
                                        <td className={modeColor}>{item.mode}</td>
                                        <td>
                                            <button className="btn" onClick={() => hadnleDelete(item._id)}>
                                                <i class="fa-solid fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
                :
                <div className="no-orders">
                    <p>You haven't placed any orders today</p>

                    <Link to={'/dashboard'} className='btn order-btn' >
                        Get started
                    </Link>
                </div>
            }

        </div>
    );
}

export default Orders;