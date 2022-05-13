//lib
import React from "react"
//Interface
import { sidebarTrashIconPropsInterface } from "./sidebarTrashIconInterface"
//Css
import sidebarTrashIconStyles from "./sidebarTrashIcon.module.css";

const SidebarTrashIcon: React.FC<sidebarTrashIconPropsInterface> = (props) => {
    return (
        <i className={`fa-solid fa-trash ${sidebarTrashIconStyles["icon"]}`} onClick={props.onClick} />
    )
}

export default SidebarTrashIcon;