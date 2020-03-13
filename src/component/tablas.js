import React from 'react';
import Entradas from "./entradas";





class  Tablas  extends React.Component
{
    
    render(){
        return (
          
          this.props.list.map(list => 
        <table className="table">
        <thead>
          <tr>
            
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">edad</th>
          </tr>
        </thead>
        <tbody>
          <Entradas list={list}></Entradas>
        
        </tbody>
      </table>));
      
    }

}

    


export default Tablas;