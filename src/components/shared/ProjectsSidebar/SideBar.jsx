import { useState } from "react";
import Switcher from "../Switcher/switch";
import style from "./style.module.css"
import SideBarNav from "../SideCollapsNav/SideCollapsNav";

const navList = [
    {
        title: "UI",
        link: "",
    },
    {
        title: "front",
        link: "",
    },
    {
        title: "Back",
        link: "",
    },
    {
        title: "UI",
        link: "",
    },
]




const SideBar = () =>{

    return (<div className={style.wrapper}>
       <div className={style.projects}>
        <h1>Projects</h1>
       </div>
       <SideBarNav title="Projects" navList={navList}/>
       <SideBarNav title="Tasks" navList={navList}/>
        <Switcher/>
    </div>
    );
};

export default SideBar;