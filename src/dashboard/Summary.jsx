import { useEffect, useState } from 'react';
import '../styles/Dashboard/summary.css';
import axios from 'axios';

function Summary() {
    const [summaryData, setSummaryData] = useState([])
    const [userName, setUserName] = useState(null)


    useEffect(() => {
        axios.get('http://localhost:4001/allHoldings')
            .then((res) => {
                setSummaryData(res.data)
            })
            .catch((err) => console.error("Error fetching holdings:", err));
    }, [])
    const totalInvestment = summaryData.reduce((sum, stock) => {
        return sum + (stock?.qty || 0) * (stock.avg || 0)
    }, 0)

    const currentValue = summaryData.reduce((sum, stock) => {
        return sum + (stock?.qty || 0) * (stock?.price || 0);
    }, 0);

    const profitAndLoss = currentValue - totalInvestment
    const totalPLPercetage = (profitAndLoss / totalInvestment) * 100

    const isTotalProfit = profitAndLoss >= 0;
    const totalPLClass = isTotalProfit ? "profit" : "loss"

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))
        setUserName(user);
    }, [])
    function capitalizeFirstLetter(name) {
        if (!name) return "";
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    return (
        <div>
            <div className="username">
               <h6>Hi, {userName?.username ? capitalizeFirstLetter(userName.username) : "User"}!</h6>

                <hr className="divider" />
            </div>
            <div className="section">

                <span>
                    <p style={{ fontWeight: '500', color: '#424242' }}>Holdings ({summaryData.length})</p>
                </span>
                <div class="row row-cols-1 row-cols-md-3 g-4">

                    <div class="col">
                        <div class="card h-100">

                            <div class="card-body">
                                <h5 class="card-title">Total investment</h5>
                                <h5 className='card-text mt-3' style={{ fontWeight: '500' }}>
                                    ₹ {totalInvestment.toLocaleString("en-IN")}
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">

                            <div class="card-body">
                                <h5 class="card-title">Current value</h5>
                                <h5 className='card-text mt-3' style={{ fontWeight: '500' }}>
                                    ₹ {currentValue.toLocaleString("en-IN")}
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">

                            <div class="card-body">
                                <h5 class="card-title">P&L</h5>
                                <h5 style={{ fontWeight: '500' }} className={totalPLClass}>
                                    ₹ {profitAndLoss.toLocaleString('en-IN')} <span className='mt-1' style={{ fontSize: '14px' }}>({totalPLPercetage.toFixed(2)}%)</span>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
}

export default Summary;