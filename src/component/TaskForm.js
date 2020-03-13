import React from 'react';



class TaskForm extends React.Component {

        state={
            title:'',
            descripcion:''
        }


    onSubmit=(e)=>{

        this.props.addTask(this.state.title,this.state.descripcion)
            e.preventDefault();
           
            }

            autoCarga=(e)=>{

                this.setState({[e.target.name]:e.target.value})
            }


           

        render()
        {
           
            return(

                <form onSubmit={this.onSubmit}>

                    <input type="text" placeholder="" name="title" value={this.state.title} onChange={this.autoCarga} ></input> 
                    <br></br>
                    <textarea onChange={this.autoCarga}  name="descripcion" value={this.state.descripcion}  ></textarea>   
                    
                  <input type="submit"/>             
                </form>
            );
        }

}

  export default TaskForm;