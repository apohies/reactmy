import React from 'react';

import './App.css';
import  tasks from "./sample/task.json" ;
import  Tasks from "./component/task";
import  Chango from "./component/Chango" 




class App extends React.Component
{

  state={

    tasks:tasks 
  }
  render()
  {
  return <div>
     <Tasks  tasks={this.state.tasks} />

    <Chango />
    
     </div>
  }


}


export default App;
