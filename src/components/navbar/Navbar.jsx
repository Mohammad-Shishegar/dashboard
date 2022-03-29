import React, { useContext } from "react";
import { ChatBubbleOutlineOutlined, DarkModeOutlined, FullscreenExitOutlined, LanguageOutlined, ListOutlined, NotificationsNoneOutlined, SearchOutlined } from "@mui/icons-material"
import "./navbar.scss"
import { DarkModeContext } from "../../context/darkModeContext";
import {StyleContext} from "../../context/styleContext/styleContext"

const Navbar = (props) => {

    const { dispach } = useContext(DarkModeContext)

    const styleContext = useContext(StyleContext)


    return (
        <>
        <div className="navbar-responsive">
            
        </div>
            <div className="navbar">
                <div className="wrapper">
                    <div className="search">
                        <input type="text" placeholder="Search..." />
                        <SearchOutlined className="icon" />
                    </div>
                    <div className="items">
                        <div className="item">
                            <LanguageOutlined className="icon" />
                            English
                        </div>
                        <div className="item" onClick={() => dispach({ type: "TOGGLE" })}>
                            <DarkModeOutlined className="icon" />
                        </div>
                        <div className="item">
                            <FullscreenExitOutlined className="icon" />
                        </div>
                        <div className="item">
                            <NotificationsNoneOutlined className="icon" />
                            <div className="counter">1</div>
                        </div>
                        <div className="item">
                            <ChatBubbleOutlineOutlined className="icon" />
                            <div className="counter">2</div>
                        </div>
                        <div className="item responseitem" onClick={()=>styleContext.dispach({type:"Toggle"})}>
                            <ListOutlined className="icon" />
                        </div>
                        <div className="item">
                            <img src="https://images.pexels.com/photos/11293719/pexels-photo-11293719.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" className="avatar" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar