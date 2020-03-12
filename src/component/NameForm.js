import React from 'react';
import Tablita from "./Tablita";


class NameForm extends React.Component {

    constructor(props) {
      super(props);
      this.state = {value: '',monito:''};

      
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
                
    handleSubmit(event) {
     
        
      event.preventDefault();
      if(this.state.value == '')
      {
        alert('ni mergas');
      }else{
      this.setState({monito:this.state.value})
      }
    }
  
    render() {

      
        return (
            <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </form>
        
        <Tablita nombre={this.state.monito} > </Tablita>
       

        </div>

        
        );
      
    }
        
  }

  export default NameForm;
