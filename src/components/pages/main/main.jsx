
import Header from "@/components/shared/header/header.jsx";
import NavBar from "@/components/shared/navbar/navbar.jsx";
import SideBar from "@/components/shared/ProjectsSidebar/SideBar";


function Main() {
    return (
        <>
        
        <NavBar/>
        <SideBar/>
       
        <main>
            <Header/>
        <h1> Main</h1>
        
        </main>
        </>
    );
}
export default Main;