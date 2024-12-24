import { useState } from "react";
import style from "./style.module.css"
import line from "@assets/images/Vector.png"


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

const SideBarNav = ({navList, title}) => {
    const [isCollapse, setisCollapse] = useState(false);
        const handlecollapse = () => {
            setisCollapse(!isCollapse);
        };
    return (
        <div className={style["accordion"]}>
        <div onClick={handlecollapse} className={style["top"]}>
            <h2>{title}</h2>
        </div>

        {isCollapse && (
        <ul style={{listStyleImage: `url(${line})`}} className={style["navigation"]}>
            <li>All {title}</li>
            {
                navList.map((item, i)=>{
                    return <li key={i}>{item.title}

                    </li>;
                
        

                
            })}
            
        </ul>
        )}
    </div>
    );
}

export default SideBarNav;
