//Libs
import React, { useState } from "react"
//Atoms
import NavbarTitle from "../../Atoms/NavbarAtoms/NavbarTitle/NavbarTitle";
import NavbarSearchInput from "../../Atoms/NavbarAtoms/NavbarSearchInput/NavbarSearchInput";
import NavbarButton from "../../Atoms/NavbarAtoms/NavbarButton/NavbarButton";
//CSS
import navbarStyles from "./navbar.module.css";

const Navbar = () => {
    const [navbarSearchInputValue, setNavbarSearchInputValue] = useState(String);

    function handleButtonClick() {
        console.log("Button")
    }

    return (
        <nav className={navbarStyles["navbar-wrapper"]}>
            <div>
                <NavbarTitle text="todo" />
                <NavbarSearchInput value={navbarSearchInputValue} onChange={setNavbarSearchInputValue}
                    placeholder="Search for todos..." />
            </div>
            <NavbarButton buttonCallback={handleButtonClick}>
                <i className="fal fa-plus"></i>
            </NavbarButton>
        </nav >
    )
}

export default Navbar