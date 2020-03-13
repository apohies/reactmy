import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import  tasks from "./sample/task.json" ;
import  Tasks from "./component/task";
import  Chango from "./component/Chango";
import  NameForm from "./component/NameForm";

import TaskForm from "./component/TaskForm"





class App extends React.Component
{

  state={

    tasks:tasks 
  }

  addTask=(title,descripcion)=>{
    const  newTask ={
                      id:45,
                      title:title,
                      descripcion:descripcion
                    }
                  this.setState({
                    tasks:[...this.state.tasks,newTask]
                  })  
  
  }

  render()
  {
  return <div>
      

   
<TaskForm addTask={this.addTask}></TaskForm>
<Tasks tasks={this.state.tasks}></Tasks>
    
     </div>
  }


}


export default App;
