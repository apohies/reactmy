import React from 'react';





class  Tablita  extends React.Component
{

 
    
    render(){
           

            const{nombre}=this.props;
     return (<table >
     <tr>
       <th>Firstname</th>
       <th>Lastname</th> 
       <th>Age</th>
     </tr>
     <tr>
       <td>nada </td>
       <td>nadita</td>
     <td>{nombre}</td>
     </tr>
    
   </table>);

      
    }

}

    


export default Tablita;