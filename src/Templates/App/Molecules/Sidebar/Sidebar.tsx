//libs
import React, { useState } from "react"
//Atoms
import SidebarInput from "../../Atoms/SidebarAtoms/SidebarInput/SidebarInput";
import SidebarTag from "../../Atoms/SidebarAtoms/SidebarTag/SidebarTag";
import SidebarTrashIcon from "../../Atoms/SidebarAtoms/SidebarTrashIcon/SidebarTrashIcon";
//css
import sidebarStyles from "./sidebar.module.css"

const Sidebar = () => {
    const [inputValue, setInputValue] = useState(String);

    function handleDeleteClick() {

    }

    return (
        <div className={sidebarStyles["sidebar-wrapper"]}>
            <div>
                <SidebarInput placeholder="Search for tags..." value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)} />

                <div className={sidebarStyles["tag-area"]}>
                    {new Array(5).fill("-").map((value, index) => (
                        <SidebarTag key={index} text="Oi" color="pink" extra={<SidebarTrashIcon onClick={handleDeleteClick} />} />
                    ))}
                </div>
            </div>

            <div>
                <SidebarTag text="Hide done todos" color="red" />
            </div>

        </div>
    )
}

export default Sidebar;