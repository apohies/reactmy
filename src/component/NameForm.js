import React from 'react';
import Tablita from "./Tablita";
import Tablas from "./tablas";


class NameForm extends React.Component {

    constructor(props) {
      super(props);
      this.state = {nombre: '',monito:'',apellido:'',edad:'',

       list:[]
                  
          };

          
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
      
      event.preventDefault();

      this.setState({monito:{a:this.state.nombre , b:this.state.apellido , c:this.state.edad}})
      
      var aux={nombre:this.state.nombre,apellido:this.state.apellido, edad:this.state.edad}
      
      
      this.setState(state => {
        const list = state.list.push(aux);
        return list 
      });
      
     

       
    
      }


    handleChange(event) {

      var nadita;
      var apelli;
      if(event.target.name=='cosito1')
      {
        nadita=event.target.value;
        this.setState({nombre: nadita})
      } else if(event.target.name=="apellido"){

        apelli=event.target.value;
              this.setState({apellido:apelli})
      }    else {
        this.setState({edad:event.target.value});
      }   

    
      
    }

  
  render() {
    
      console.log(this.state.list);
    
      
        return (
           
            <div className="row">
              <div className="card col-md-6 col-md-offset 3">
                  <div className="card-header">
                    Formulario de incripccion 
                  </div>
                  <div className="card-body">
                      <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text"  name="cosito1"  className="form-control" onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <label>Apellido:</label>
                        <input type="text" name= "apellido"  className="form-control" onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <label>edad:</label>
                        <input type="number" name= "edad"  className="form-control" onChange={this.handleChange} />
                    </div>

                  <input type="submit" className="btn btn-success" value="Enviar" onClick={this.handleSubmit} />
                </form>
                  </div>
              </div>
              <div className="card col-md-6 ">

                  {/* <Tablita roblox={this.state.monito}></Tablita> */}
              
                  <Tablas list={this.state.list}></Tablas>
              </div>   

            </div>

        
        );
      
    }
        
  }

  export default NameForm;
