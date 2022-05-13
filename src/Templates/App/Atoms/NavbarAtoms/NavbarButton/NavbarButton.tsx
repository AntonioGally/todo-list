//Libs
import React from "react"
//Interface
import { navbarButtonPropsInterface } from "./navbarButtonInterface"
//CSS
import navbarButtonStyles from "./navbarButton.module.css"

const NavbarButton: React.FC<navbarButtonPropsInterface> = (props) => {
    return (
        <button className={navbarButtonStyles["button"]} onClick={props.buttonCallback}>
            <span>
                {props.children}
            </span>
        </button>
    )
}

export default NavbarButton;