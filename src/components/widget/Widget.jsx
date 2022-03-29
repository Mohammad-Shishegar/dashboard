import React from "react";
import {ShoppingCartOutlined , AccountBalanceWalletOutlined, KeyboardArrowUp, MonetizationOnOutlined, PersonOutline} from "@mui/icons-material"
import "./widget.scss"

const Widget = ({type}) => {

    let data 

    const amount = 100
    const diff = 20

    switch (type) {
        case "user":
            data={
                title:"USER",
                isMoney:false,
                link:"See All Users",
                icon: <PersonOutline className="icon" style={{color:"crimson" , backgroundColor:"rgb(255 , 0 , 0 , 0.2)"}}/>
            }
            break;
        case "order":
            data={
                title:"ORDERS",
                isMoney:false,
                link:"See All Orders",
                icon: <ShoppingCartOutlined className="icon" style={{color:"goldenrod" , backgroundColor:"rgba(218 , 165 , 32 , 0.2)"}}/>
            }
            break;
        case "erarning":
            data={
                title:"ERARNINGS",
                isMoney:true,
                link:"View net earnings",
                icon: <MonetizationOnOutlined className="icon" style={{color:"green" , backgroundColor:"rgba(0 , 128 , 0 , 0.2)"}}/>
            }
            break;
        case "balance":
            data={
                title:"BALANCE",
                isMoney:true,
                link:"See Details",
                icon: <AccountBalanceWalletOutlined className="icon" style={{color:"purple" , backgroundColor:"rgba(128 , 0 , 128 , 0.2)"}}/>
            }
            break;
            default:
            break;
    }


    return(
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"}  {amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUp/>
                    {diff} %
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget