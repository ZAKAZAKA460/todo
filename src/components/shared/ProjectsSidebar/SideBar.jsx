import { useState } from "react";
import Switcher from "../Switcher/switch";
import style from "./style.module.css"
import SideBarNav from "../SideCollapsNav/SideCollapsNav";
import { Link } from "react-router-dom";


const projectsList = [
    {
        title:"disagn",
        link:""
    },
    {
        title:"disagn",
        link:""
    },  
    {
        title:"disagn",
        link:""
    },  
    {
        title:"disagn",
        link:""
    }, 
    {
        title:"disagn",
        link:""
    },
]

const tasksList = [
    {
        title:"task1",
        link:""
    },
    {
        title:"task2",
        link:""
    },  
    {
        title:"task3",
        link:""
    },  
    {
        title:"task4",
        link:""
    }, 
    {
        title:"task5",
        link:""
    },
]
const NickList = [
    {
        title:"Den",
        link:""
    },
    {
        title:"Chel",
        link:""
    },  
    {
        title:"Gordon",
        link:""
    },  
    {
        title:"Makarov",
        link:""
    }, 
    {
        title:"Mell",
        link:""
    },
]


const SideBar = () =>{

    return (<div className={style.wrapper}>
       <div className={style.projects}>
        <h1>Projects</h1>
       </div>
       <SideBarNav title="Projects" navList={projectsList}/>
       <SideBarNav title="Tasks" navList={tasksList}/>
       <SideBarNav title="Nicks" navList={NickList}/>
        <Switcher/>
    </div>
    );
};

export default SideBar;