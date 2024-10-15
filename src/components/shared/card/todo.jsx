import { ButtonIcon } from "@/components/shared/UI/buttons/buttons.jsx";
import progress from "@assets/icons/progress.svg"
import bar from "@assets/icons/bar.svg"
import menu from "@assets/icons/menu.svg"
import style from "./style.module.css"

const Todocard = ({card}) =>{
    return <article className={style.card}>
        <div className={style.top}>
        <h1>{card.title}</h1>
        <ButtonIcon icon={menu} />
        </div>
        <div className={style.title}>
        <ButtonIcon icon={progress} />
        <p>{card.status}</p> 
        <p>{card.progress}/10</p>
        </div>
        <ButtonIcon icon={bar} />
        <div className={style.dateBlock}>
        <p>{card.dueDate}</p>
        </div>
        
    </article>
};

export default Todocard;
