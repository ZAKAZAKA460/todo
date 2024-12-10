import { useState } from "react";
import Switcher from "../Switcher/switch";
import style from "./style.module.css"

const SideBar = () =>{

    return (<div className={style.wrapper}>
       <div className={style.projects}>
        <h1>Projects</h1>
       </div>
        <Switcher/>
    </div>
    );
};

export default SideBar;