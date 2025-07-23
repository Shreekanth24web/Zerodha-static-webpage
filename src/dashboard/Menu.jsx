import { useState } from "react";
import { Link } from 'react-router-dom'


function Menu() {

    const [selectedMenu, setSelectedMenu] = useState(0)
    // const [isprofileDropdownOpen, setIsprofileDropdownOpen] = useState(false)

    const handleClick = (index) => {
        setSelectedMenu(index)
    }

    // const handleProfileClick = (index) => {
    //     setIsprofileDropdownOpen(!isprofileDropdownOpen)
    // }

    const menuClass = 'menu';
    const activeMenuClass = 'menu selected'

    return (
        <div className="menu-container">

            <div>
                <img src="media/Images/logo.png" alt="kit_logo_IMG_ERR" style={{ width: '10%' }} />
            </div>
            <div className="menus">
                <ul>
                    <li>
                        <Link to="/dashboard" onClick={()=>{handleClick(0)}} style={{textDecoration:"none"}}>
                            <p className={selectedMenu===0 ? activeMenuClass:menuClass}>Dashboard</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/orders" onClick={()=>handleClick(1)} style={{textDecoration:'none'}} >
                        <p className={selectedMenu===1? activeMenuClass:menuClass}>Orders</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/holdings" onClick={()=>{handleClick(2)}} style={{textDecoration:"none"}}>
                            <p className={selectedMenu===2 ? activeMenuClass:menuClass}>Holdings</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/positions" onClick={()=>handleClick(3)} style={{textDecoration:'none'}} >
                        <p className={selectedMenu===3? activeMenuClass:menuClass}>Positions</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/funds" onClick={()=>{handleClick(4)}} style={{textDecoration:"none"}}>
                            <p className={selectedMenu===4 ? activeMenuClass:menuClass}>Funds</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/apps" onClick={()=>handleClick(5)} style={{textDecoration:'none'}} >
                        <p className={selectedMenu===5? activeMenuClass:menuClass}>Apps</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" onClick={()=>handleClick(6)} style={{textDecoration:'none',fontWeight:'800'}} >
                        <p className={selectedMenu===6? activeMenuClass:menuClass} style={{fontSize:'15px', fontWeight:'700'}}>LogOut</p>
                        </Link>
                    </li>
                </ul>
                <hr />
                <div className="profile">
                    <div className="avatar">ZU</div>
                    <p className="username">USERID</p>
                </div>
            </div>

        </div>
    );
}

export default Menu;