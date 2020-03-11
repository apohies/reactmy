import React from 'react';
import "./task.css"




class  Tarea  extends React.Component
{

    StyleCompleted(){
        return { fontSize:"20px",
                color:this.props.tasks.done ?'yellow' : 'green',
            textDecoration:'none'}
    }
    render(){

        const{tasks}=this.props;

        return  <div style={this.StyleCompleted()}>
                    {tasks.title} - 
                    {tasks.descripcion } -
                     {tasks.done} - 
                     {tasks.id}
                         <input type="checkbox"/>
                    <button style={btnDelete}>x</button>
        </div>
    }

}

const btnDelete ={
    fontSize:"21px",
    background:"#ea2027",
    color:"#fff",
    padding:'10px 15px',
    borderRadius:'50%',
    cursor:'pointer',
    
}

export default Tarea;