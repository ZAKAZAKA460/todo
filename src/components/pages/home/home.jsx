import { Button, ButtonIcon } from "@/components/shared/UI/buttons/buttons.jsx";
import sun from "@/assets/icons/sun.svg"
import Header from "@/components/shared/header/header.jsx";
import Todocard from "@/components/shared/card/todo";

const card ={
    title:"New oijoijoi",
    project:"task",
    status:"In progress",
    progress:10,
    dueDate: "01.09.22"
}
export default function Home(){
    return (
        <main>
            <h1>home</h1>
            <ButtonIcon icon={sun}/>
            <Button 
                styles={{ 
                backgroundColor: "black",
                color: "white",
                borderRadious: "19px",
                outline: "none",
                border: "none",
                padding: "12px 24px",
            }}
            child={"New Template"}>
            </Button>
            <Header />
            <Todocard card={card} />
        </main>
    );
}
