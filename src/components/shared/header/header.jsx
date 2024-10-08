import { ButtonIcon } from "@/components/shared/UI/buttons/buttons.jsx";
import search from "@assets/icons/search.svg"
import date from "@assets/icons/date.svg"
import notification from "@assets/icons/notification.svg"
import style from "./style.module.css"

const Header = () =>{
    return <header className={style.header}>
        <h1>Welcome back, Username</h1>
        <div className={style.widjets}>
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