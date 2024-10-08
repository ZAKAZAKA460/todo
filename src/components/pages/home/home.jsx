import { Button, ButtonIcon } from "@/components/shared/UI/buttons/buttons.jsx";
import sun from "@/assets/icons/sun.svg"
import Header from "@/components/shared/header/header.jsx";


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
        </main>
    );
}
