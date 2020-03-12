import React from 'react';





class  Tablita  extends React.Component
{

 
    
    render(){
           

            const{roblox}=this.props;
     return (<table >
     <tr>
       <th>Firstname</th>
       <th>Lastname</th> 
       <th>Age</th>
     </tr>
     <tr>
       <td>{roblox.a} </td>
     <td>{roblox.b}</td>
     <td>28</td>
     </tr>
    
   </table>);

      
    }

}

    


export default Tablita;