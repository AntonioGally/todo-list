//libs
import React from "react"
//interface
import { sidebarTagPropsInterface } from "./sidebarTagInterface"
//Css
import sidebarTagStyles from "./sidebarTag.module.css";

const SidebarText: React.FC<sidebarTagPropsInterface> = (props) => {
    return (
        <div className={sidebarTagStyles["tag-wrapper"]}>
            <div>
                <div style={{ backgroundColor: props.color }} className={sidebarTagStyles["tag-color"]} />
                <span className={sidebarTagStyles["tag-text"]}>{props.text}</span>
            </div>
            {props.extra && props.extra}
        </div>
    )
}

export default SidebarText;