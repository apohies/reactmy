import React from 'react';





class  Entradas  extends React.Component
{
    
    render(){

        const{list}=this.props;

        return(
            <tr>
        <td>{list.nombre}</td>
        <td>{list.apellido}</td>
        <td>{list.edad}</td>
        </tr>
        );

      

    }

}

    


export default Entradas;