import style from "./style.module.css";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
function Login() {

const [users, setUsers] = useState([]);
const [formData, setFormData] = useState({
  username:"",
  password:""
});

  const nav = useNavigate();

const handleChangeInput = (event)=>{
  const {value, name} = event.currentTarget;
  console.log(name, value);
  setFormData({...formData, name: value})
};

  const checkUser = () => {
    console.log(formData);
    const user = users.find((user) => user.username === formData.username);
    console.log(users,user);
    
    if (user && user.password === formData.password) {
      nav("/");

    }
    else {
      alert("incorrect");
    }
  };


  const handleLogIN = (event) => {
    event.preventDefault();
    console.log("press");
    checkUser();
  };

  const fetchUsers = async () => {
    await fetch("/api/users.json")
      .then((Response) => {
        return Response.json();
      })
      .then((data) => {
        console.table(data);
        setUsers(data);
      });
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <main className={style.text}>
        <form className="form" onSubmit={handleLogIN}>
          <p className="form-title">Sign in to your account</p>
          <div className="input-container">
            <input onInput={handleChangeInput} placeholder="Enter email" name="username" type="text" required />
            <span>
              <svg
                stroke="currentColor"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  stroke-width="2"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
            </span>
          </div>
          <div className="input-container">
            <input onInput={handleChangeInput} placeholder="Enter password" name="password" type="password" required />

            <span>
              <svg
                stroke="currentColor"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  stroke-width="2"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  stroke-width="2"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
            </span>
          </div>
          <input onInput={handleChangeInput} type="checkbox" name="chek" required id="" />
          <button className="submit" type="submit">
            Sign in
          </button>

          <p className="signup-link">
            No account?
            <a href="">Sign up</a>
          </p>
        </form>
      </main>
    </>
  );
}
export default Login;
