import React from 'react';







class Chango extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }
    
      componentDidMount() {
        fetch("https://randomuser.me/api/")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.results
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
        }
        
        render() {
          console.log(this.state.items)
            const { error, isLoaded, items } = this.state;
            if (error) {
                  return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <ul>
              {items.map(item => (
                <li key={item.gender}>
                  {item.gender} {item.name.title}
                </li>
              ))}
            </ul>
          );
        } 

       
      }
  
 

}


export default Chango;