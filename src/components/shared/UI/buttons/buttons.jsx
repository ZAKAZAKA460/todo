import s from "./style.module.css";

const ButtonIcon =({icon, styles}) => {
    return  (
    <button className={s["btn-icon"]} style={styles}>
        <img src={icon} alt="" />
    </button>
    );
};

const Button = ({text, styles, child}) =>{
    return <button style={styles}>{child}

    </button>;
};
export {ButtonIcon, Button};