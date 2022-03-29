import React, { useContext, useEffect, useState } from "react"
import { AccountCircleOutlined, Store, CreditCard, Dashboard, ExitToApp, InsertChart, LocalShipping, NotificationsNone, PermIdentity, PersonOutline, PsychologyOutlined, SettingsApplications, SettingsSystemDaydreamOutlined } from "@mui/icons-material"
import "./sidebar.scss"
import { DarkModeContext } from "../../context/darkModeContext"
import { StyleContext } from "../../context/styleContext/styleContext"
import { Link } from "react-router-dom"
import { style } from "@mui/system"

const Sidebar = (props) => {

    const [style, setStyle] = useState("")


    const { dispach } = useContext(DarkModeContext)

    const styleContext = useContext(StyleContext)

    const handleStyle = () => {
        if (styleContext.Open === true)
            document.getElementById("sidebar").style.left = ("0")
        else if (styleContext.Open === false)
            document.getElementById("sidebar").style.left = ("-250px")

    }

    useEffect(()=>{
        handleStyle()
    } , [styleContext.Open])


    console.log(styleContext.Open)
    return (
        <div className={!styleContext.Open ? "sidebar" : "sidebar"} id="sidebar">
            <div className="top">
                <Link to={"/"} style={{ textDecoration: "none" }}>
                    <span className="logo">lama admin</span>
                </Link>

            </div>
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <Dashboard className="icon" />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <Link to={"/users"} style={{ textDecoration: "none" }}>
                        <li>
                            <PersonOutline className="icon" />
                            <span>Users</span></li>
                    </Link>
                    <Link to={"/product"} style={{ textDecoration: "none" }}>
                        <li>
                            <Store className="icon" />
                            <span>Products</span></li>
                    </Link>
                    <li>
                        <CreditCard className="icon" />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShipping className="icon" />
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <InsertChart className="icon" />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNone className="icon" />
                        <span>Notification</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamOutlined className="icon" />
                        <span>System Health</span></li>
                    <li>
                        <PsychologyOutlined className="icon" />
                        <span>Logs</span></li>
                    <li>
                        <SettingsApplications className="icon" />
                        <span>Setting</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AccountCircleOutlined className="icon" />
                        <span>Profile</span></li>
                    <li>
                        <ExitToApp className="icon" />
                        <span>Log Out</span></li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" onClick={() => dispach({ type: "LIGHT" })}></div>
                <div className="colorOption" onClick={() => dispach({ type: "DARK" })}></div>
            </div>
        </div>
    )
}

export default Sidebar