import style from "./style.module.css";
import profile from "@assets/icons/DropMeFiles_v9B2G/profile.svg";
import calendar from "@assets/icons/DropMeFiles_v9B2G/calendar.svg";
import main from "@assets/icons/DropMeFiles_v9B2G/main.svg";
import logout from "@assets/icons/DropMeFiles_v9B2G/logout.svg";
import { Link, NavLink } from "react-router-dom";

const linksList = [
    {
        link:"/profile",
        icon:profile
    },
    {
        link:"/",
        icon:main
    },
    {
        link:"/calendar",
        icon:calendar
    },
];

const NavBar = () => {
    return (
        <aside className={style.navbar}>
            <nav className={style.navigation}>
                
                    {linksList.map(function(item,i) {
                        console.log("number",i,item);
                        return (<>
                        <NavLink className={({isActive})=> isActive ? "nav-link --active-link" : "nav-link"} to={item.link}>
                        <img src={item.icon} alt=""/>
                        </NavLink>
                        </>
                        )
                    })}
                
            </nav>
            <Link to={"/login"}>Sign out</Link>
        </aside>
    );



};
export default NavBar;