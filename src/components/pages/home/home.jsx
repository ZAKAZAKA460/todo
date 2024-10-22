
import Header from "@/components/shared/header/header.jsx";
import Todocard from "@/components/shared/card/todo";

const cardMass =[
{
    title:"New project",
    project:"task",
    status:"In progress",
    progress:100,
    dueDate: "01.09.22"
},
{
    title:"Buy bread",
    project:"Goal",
    status:"In progress",
    progress:79,
    dueDate: "15.10.24"
},

];

export default function Home(){
    return (
        <main>
            
            <Header />
            
            
                {cardMass.map((card,index) => {
                  return ( <Todocard card={card} />)
                   
                
            })}

        </main>
    );
}
