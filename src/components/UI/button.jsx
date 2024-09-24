import style from "./style.module.css";
import icon from "../../assets/icons/sun.svg";

const ButtonDefault = (props) =>{
    return <button className={style.btn}>
        {props.text}
    </button>;
};

const ButtonIcon = ({icon}) =>{
    return (
    <button className={style.btnIcon}>
        <img src={icon} alt="" />
    </button>
    );
};

export {ButtonDefault, ButtonIcon};
