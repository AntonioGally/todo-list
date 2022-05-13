//libs
import React, { useState } from "react"
//Atoms
import SidebarInput from "../../Atoms/SidebarAtoms/SidebarInput/SidebarInput"
//css
import sidebarStyles from "./sidebar.module.css"

const Sidebar = () => {
    const [inputValue, setInputValue] = useState(String);
    return (
        <div className={sidebarStyles["sidebar-wrapper"]}>
            <SidebarInput placeholder="Search for tags..." value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} />
        </div>
    )
}

export default Sidebar;