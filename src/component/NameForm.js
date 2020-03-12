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
      if(this.state.nombre == '')
      {
        alert('ni mergas');
      }else{
      this.setState({monito: {a:this.state.nombre , b:this.state.apellido }})

    }
  }


  //  handleChange(evt) {
  //   const value = evt.target.value;
  //   this.setState({
  //     ...state,
  //     [evt.target.name]: value
  //   });
  // }
  
  render() {
    
    console.log(this.state.monito);
      
        return (
            <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text"  name="nombre"  onChange={this.handleChange} />
          </label>

          <label>
            apellido:
            <input type="text" name= "apellido"  onChange={this.handleChange} />
          </label>


          <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </form>
        
        <Tablita roblox={this.state.monito} > </Tablita>
       

        </div>

        
        );
      
    }
        
  }

  export default NameForm;
