import React from 'react';
import Tarea from './tarea';

class  Tasks extends React.Component
{

    render()
    {
        return  this.props.tasks.map(tasks => <Tarea tasks={tasks} key={tasks.id}/>);
    }

}

export default Tasks;