//Libs
import React from "react";
//Components
import Navbar from "../Molecules/Navbar/Navbar";
import Sidebar from "../Molecules/Sidebar/Sidebar";
//CSS
import organismStyles from "./organism.module.css";

const Organism = () => {
    return (
        <div className={organismStyles["app-organism-wrapper"]}>
            <Navbar />
            <div className={organismStyles["columns-wrapper"]}>
                <div className={organismStyles["column-1"]}>
                    <Sidebar />
                </div>
                <div className={organismStyles["column-2"]}></div>
            </div>
        </div>
    )
}

export default Organism;