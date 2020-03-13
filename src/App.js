import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import  tasks from "./sample/task.json" ;
import  Tasks from "./component/task";
import  Chango from "./component/Chango";
import  NameForm from "./component/NameForm";





class App extends React.Component
{

  state={

    tasks:tasks 
  }
  render()
  {
  return <div>
      

   

    <NameForm/>
    
     </div>
  }


}


export default App;
