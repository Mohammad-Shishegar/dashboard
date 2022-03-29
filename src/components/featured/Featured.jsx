import React from "react";
import { KeyboardArrowDown, KeyboardArrowUp, MoreVert } from "@mui/icons-material"
import { CircularProgressbar } from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css';
import "./featured.scss"

const Featured = () => {
    return (
        <div className="featured">
            <div className="top">
                <h1 className="title">Total Revent</h1>
                <MoreVert fontSize="small" />
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={70} text={"70%"} strokeWidth={2} className="featuredChart" />
                </div>
                <p className="title">Total Sales Made Today</p>
                <p className="amount">$450</p>
                <p className="desc">Previos Transaction Processing. Last Payment may not be included.</p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">
                            Last Week
                        </div>
                        <div className="itemResult negative">
                            <KeyboardArrowDown fontSize="small"/>
                            <div className="resultAmount ">
                                $12.4k
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">
                            Target
                        </div>
                        <div className="itemResult positive">
                            <KeyboardArrowUp fontSize="small"/>
                            <div className="resultAmount ">
                                $12.4k
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">
                            Last Month
                        </div>
                        <div className="itemResult positive">
                            <KeyboardArrowUp fontSize="small"/>
                            <div className="resultAmount">
                                $12.4k
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured