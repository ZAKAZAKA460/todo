import { ButtonIcon } from "@/components/shared/UI/buttons/buttons.jsx";
import search from "@assets/icons/search.svg"
import date from "@assets/icons/date.svg"
import notification from "@assets/icons/notification.svg"
import style from "./style.module.css"
import SearchBar from "@/components/shared/UI/SearchBar/SearchBar.jsx";
import { useState } from "react";


const Header = () =>{

    const [issearchactive, setIsSearchActive] = useState(false);
    return <header className={style.header}>
        <h1>Welcome back, Username</h1>
        <div className={style.widjets}>
        {issearchactive && <SearchBar/>}
        <ButtonIcon icon={notification} />
        
        <ButtonIcon icon={search} />
        <div className={style.dateBlock}>
        <ButtonIcon icon={date} />
        <p>19 may 2024</p>
        </div>
        </div>

    </header>;

};

export default Header;