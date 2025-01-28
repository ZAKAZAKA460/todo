
import Header from "@/components/shared/header/header.jsx";
import NavBar from "@/components/shared/navbar/navbar.jsx";
import SideBar from "@/components/shared/ProjectsSidebar/SideBar";
import TodoBox from "@/components/shared/TodoBOx/todoBox";
import { Fragment, useEffect, useState } from "react";

const todoList = [
 {
    id: 1,
    title:"buy milk",
    projecgt:"shop",
    satus:"in process",
    dueDate:"01.01.01",
    progress: 3,
 }
]

function Main() {

    const [projectData, setProjectsData] = useState([]);

        const fetchTodos = async () => {
                await fetch("/api/todos.json")
                .then((Response)=>{
                    return Response.json();

                })
                .then((data) => {
                    console.table(data);
                    setProjectsData(data);
                });
            }
      useEffect(() =>{
            fetchTodos();
        },[])
        return (

      
        
        <>
        <NavBar/>
        <SideBar/>
       
        <main>
            <Header/>
            <div style={{display: "flex"}}>
                {
                    projectData.map((project)=>{
                        return (<Fragment key={project.id} >
                             <TodoBox todoList={project.todos} title={project.project}/>
                        </Fragment>
                        );
                    })}
                
            </div>
       
        
        </main>
        </>
    );
}
export default Main;