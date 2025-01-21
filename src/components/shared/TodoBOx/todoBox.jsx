import Todocard from "../card/todo";
import { Button } from "../UI/buttons/buttons";
 import style from "./style.module.css"
import addIcon from "@assets/icons/menu.svg"
export default function TodoBox({ todoList, title}) {
    return (
        <section className={style.box}>
            <header>
                <h2>{title} (4)</h2>
                <Button
                    styles={{
                        background: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        border:"none",
                        color: "white",
                        fontSize:"16px",
                    }}
                    >
                        <img src={addIcon} alt=""/>
                        Add view
                    </Button>
            </header>
            {todoList ? ( 
                <div className={style.list}>
                    {todoList.map(function (card) {
                        return <Todocard card={card}/>;
                    })}
                </div>
            ) : (
                <div>
                    <p>No tasks found</p>
                </div>
            )}
        </section>
    );
}