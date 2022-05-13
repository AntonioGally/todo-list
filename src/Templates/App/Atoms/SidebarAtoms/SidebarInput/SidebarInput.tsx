//libs
import React from "react";
//Interface
import { sidebarInputPropsInterface } from "./sidebarInputInterface";
//css
import sidebarInputStyles from "./sidebarInput.module.css";

const SidebarInput: React.FC<sidebarInputPropsInterface> = (props) => {
    return <input onChange={props.onChange} value={props.value}
        style={props.style} placeholder={props.placeholder} className={sidebarInputStyles["input"]} />
}

export default SidebarInput;