import iti from "../../assets/images/iti.png";
import { ButtonDefault, ButtonIcon } from "../UI/button";
import sun from "../../assets/icons/sun.svg"
import Down from "../../assets/icons/Down.svg"

export default function Main(){
    console.log(iti);
    return (
        <main>
            <img src={iti} alt="" />
            <ButtonDefault text="Button"></ButtonDefault>
            <ButtonIcon icon={sun}/>
            <ButtonIcon icon={Down}/>
        </main>
    );
}