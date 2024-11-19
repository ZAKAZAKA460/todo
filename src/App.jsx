import Home from '@/components/pages/home/home.jsx';
import "./thems/variable.css";
import './App.css';
import { InputDefault, InputPassword } from './components/shared/UI/buttons/inputs/input';
import { TextArea } from '@/components/shared/UI/textArea/textarea.jsx';
import SideBar from './components/shared/ProjectsSidebar/SideBar';

function App() {
  return (<>
  <InputPassword />
  <SideBar/>
  <InputDefault ph={"yuybguyghyuguy"}/>
  <Home />
  <TextArea br = {"20px"}ft = {"40px"}bgcolor={"gray"} ph={"fffff"}/>
  </>)
}

export default App
