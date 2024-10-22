import { ButtonIcon } from "@/components/shared/UI/buttons/buttons.jsx";
import progress from "@assets/icons/progress.svg"
import menu from "@assets/icons/menu.svg"
import style from "./style.module.css"

const Todocard = ({card}) =>{
    return (<article className={style.card}>
        <div className={style.top}>
        <h1>{card.title}</h1>
        <ButtonIcon icon={menu} />
        </div>
        
        <div className={style.title}>
        <ButtonIcon icon={progress} />
        <p>{card.status}</p> 
        <p>{card.progress}/100</p>
        </div>
        <div className={style.progress}>
            <div style={{
                width: card.progress + "%",
                backgroundColor: card.progress <= 40 ? ' rgb(255, 0, 0)': card.progress <= 99 ? 'rgb(255, 136, 0)': 'rgb(0, 255, 76)',
            }} className={style.progress_bar}></div>
        </div>
        <div className={style.dateBlock}>
        <p>{card.dueDate}</p>
        </div>
        
    </article>
    );
};

export default Todocard;

