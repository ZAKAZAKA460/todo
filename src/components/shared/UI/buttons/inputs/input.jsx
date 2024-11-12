import styles from "./inputs.module.css";
import { useState } from "react";

function input() {
    console.log("something", element.target.value);
}
function Select(element) {}

const InputDefault = ({ph}) => {
    return <input 
    onSelect={Select} 
    onInput={input} 
    type = "text"
    placeholder={ph} 
/>;
}
const InputFunction = ({Select}) => {
    return <input onSelect={Select} onInput={input} type = "text"
    placeholder={Select} 
/>;
}

const InputPassword = () => {
     
    const[isVisible, serIsVisible] = useState(false);

    const handleClick = () => {
        console.log("press on button");
        serIsVisible(!isVisible);
    };
    return <div>
        <input type={isVisible == true ? "text" : "password"}/>
        <button onClick={handleClick}>Show password</button>
    </div>
}

export {InputDefault, InputPassword};
