
import Header from "@/components/shared/header/header.jsx";
import NavBar from "@/components/shared/navbar/navbar.jsx";
import SideBar from "@/components/shared/ProjectsSidebar/SideBar";
import TodoBox from "@/components/shared/TodoBOx/todoBox";

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
    return (
        <>
        
        <NavBar/>
        <SideBar/>
       
        <main>
            <Header/>
        <TodoBox todoList={todoList} title="projects"/>
        
        </main>
        </>
    );
}
export default Main;