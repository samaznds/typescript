import './App.css';
import { Person ,Country} from './Person';

function App() {

  const getAge =(name : string) : number =>{
    return 33
  }

  const age : number = getAge("sama")
  return (
    <div className="App">
     <Person 
     name={"sama"}
     email ={"sama@sa"}
     age = {33}
     ismaried = {true}
     courses = {["java" ,"css"]}
     country={Country.Iran }/>
    </div>
  );
}

export default App;
