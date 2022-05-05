//Libs
import React from "react"
//Interface
import { navbarTitlePropsInterface } from "./navbarTitleInterface"
//CSS
import navbarTitleStyles from "./navbarTitle.module.css";

const NavbarTitle: React.FC<navbarTitlePropsInterface> = (props) => {
    return (
        <h3 style={{ ...props.style }} className={navbarTitleStyles["title"]}>
            {props.text}
        </h3>
    )
}

export default NavbarTitle;