import React from 'react';
import Tablita from "./Tablita";


class NameForm extends React.Component {

    constructor(props) {
      super(props);
      this.state = {nombre: '',monito:'',apellido:'',
                  
          };

      
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {

      var nadita;
      var apelli;
      if(event.target.name=='cosito1')
      {
        nadita=event.target.value;
        this.setState({nombre: nadita})
      } else{

        apelli=event.target.value;
              this.setState({apellido:apelli})
      }
      
      
    }
                
    handleSubmit(event) {
      event.preventDefault();
    
      this.setState({monito: {a:this.state.nombre , b:this.state.apellido }})

    
  }


  //  handleChange(evt) {
  //   const value = evt.target.value;
  //   this.setState({
  //     ...state,
  //     [evt.target.name]: value
  //   });
  // }
  
  render() {
    
    console.log(this.state.nombre);
      
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
                        <input type="text"  name="cosito1" value={this.state.nombre}  className="form-control" onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <label>Apellido:</label>
                        <input type="text" name= "apellido"  value={this.state.apellido}className="form-control" onChange={this.handleChange} />
                    </div>

                  <input type="submit" className="btn btn-success" value="Enviar" onClick={this.handleSubmit} />
                </form>
                  </div>
              </div>
              <div className="card col-md-6 ">
                  <Tablita roblox={this.state.monito} > </Tablita>
              </div>   

            </div>

        
        );
      
    }
        
  }

  export default NameForm;
