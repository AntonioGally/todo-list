//Libs
import React from "react"
//Interface
import { navbarSearchInputPropsInterface } from "./navbarSearchInputInterface"
//CSS
import navbarSearchInputStyles from "./navbarSearchInput.module.css";

const NavbarSearchInput: React.FC<navbarSearchInputPropsInterface> = (props) => {
    return (
        <input className={navbarSearchInputStyles["input"]} value={props.value} style={{ ...props.style }}
            onChange={(e) => { props.onChange(e.target.value) }} placeholder={props?.placeholder} />
    )
}

export default NavbarSearchInput