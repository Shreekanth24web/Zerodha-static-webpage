import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Dashboard/holdings.css'

function Holdings() {
    const [allHoldings, setAllHoldings] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:4001/allHoldings").then((res) => {
            // console.log(" All Holdings" ,res.data)
            setAllHoldings(res.data)
        })
    },[])
    return (
        <div>
            <h3 className="Holdings-title">Holdings ({allHoldings.length})</h3>

            <div className="Holdings-table">
                <table>
                    <thead>
                        <tr>
                            <th>Instrument</th>
                            <th>Qty.</th>
                            <th>Avg. cost</th>
                            <th>LTP</th>
                            <th>Cur. val</th>
                            <th>P&L</th>
                            <th>Net chg.</th>
                            <th>Day chg.</th>
                        </tr>
                    </thead>

                    <tbody>

                        {allHoldings.map((item, i) => { 
                            const curValue = item.price * item.qty;
                            const isProfit = curValue - item.avg * item.qty >= 0.0;
                            const profClass = isProfit ? "profit" : "loss";
                            const dayClass = item.isLoss ? "loss" : "profit"
                            return (
                                <tr key={i}>
                                    <td>{item.name}</td>
                                    <td>{item.qty}</td>
                                    <td>{item.avg}</td>
                                    <td>{item.price}</td>
                                    <td>{curValue}</td>
                                    <td className={profClass}>
                                        {(curValue - item
                                            .avg * item.qty).toFixed(2)
                                        }
                                    </td>
                                    <td className={profClass}>{item.net}</td>
                                    <td className={dayClass}>{item.day}</td>
                                </tr>
                            )
                        })}
                    </tbody>

                </table>
            </div>

            <div className="row holding-row">
                <div className="col holding-col">
                    <h5>
                        29,875.<span>55</span>{" "}
                    </h5>
                    <p>Total investment</p>
                </div>
                <div className="col holding-col">
                    <h5>
                        31,428.<span>95</span>{" "}
                    </h5>
                    <p>Current value</p>
                </div>
                <div className="col holding-col">
                    <h5>1,553.40 (+5.20%)</h5>
                    <p>P&L</p>
                </div>
            </div>
        </div>
    );
}

export default Holdings;