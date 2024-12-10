import style from "./style.module.css";

function Login() {
    return (
        <>
        <main className={style.text}>
            <form >
                <input required type="text"/>
                <input required type="password"/>
                <button type="sumbit">Log in</button>
                </form>
                </main>
        </>
    );
}
export default Login;