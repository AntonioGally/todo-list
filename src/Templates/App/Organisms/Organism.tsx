//Libs
import React from "react";
//Components
import Navbar from "../Molecules/Navbar/Navbar";
//CSS
import organismStyles from "./organism.module.css";

const Organism = () => {
    return (
        <div className={organismStyles["app-organism-wrapper"]}>
            <Navbar />
        </div>
    )
}

export default Organism;