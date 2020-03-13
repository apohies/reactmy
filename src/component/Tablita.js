import React from 'react';





class  Tablita  extends React.Component
{

 
    
    render(){
           

            const{roblox}=this.props;
     return (

      <table className="table">
      <thead>
        <tr>
          
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Nacionalidad</th>
        </tr>
      </thead>
      <tbody>
        <tr>
         
          <td>{roblox.a}</td>
          <td>{roblox.b}</td>
     <td>{roblox.c}</td>
        </tr>
      
      </tbody>
    </table>
     
        );

      
    }

}

    


export default Tablita;