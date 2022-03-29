import React, { useState } from "react";
import { DriveFolderUpload, InputSharp, PropaneSharp } from "@mui/icons-material"
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./new.scss"

const New = (props) => {

    const { title, inputs } = props

    const [file , setFile] = useState("") 


    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={file ? URL.createObjectURL(file) : "https://images.pexels.com/photos/10838759/pexels-photo-10838759.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" } alt="" />
                    </div>
                    <div className="right">
                        <form>
                            <div className="formInput">
                                <label htmlFor="file">Iamge : <DriveFolderUpload className="icon" /></label>
                                <input type="file" id="file" style={{ display: "none" }} onChange={(e)=>{setFile(e.target.files[0])}}/>
                            </div>
                            {inputs.map(item => (
                                <div className="formInput" key={item.id}>
                                    <label>{item.label}</label>
                                    <input type={item.type} placeholder={item.placeholder} />
                                </div>
                            ))}

                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New