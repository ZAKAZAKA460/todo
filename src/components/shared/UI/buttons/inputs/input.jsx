import styles from "./inputs.module.css";

function input() {
    console.log("something", element.target.value);
}
function Select() {
    console.log("something", element.target.value);
}

const InputDefault = ({ph}) => {
    return <input onSelect={Select} onInput={input} type = "text"
    placeholder={ph} 
/>;
}
const InputFunction = ({Select}) => {
    return <input onSelect={Select} onInput={input} type = "text"
    placeholder={Select} 
/>;
}

export {InputDefault};
