import React, { Component } from 'react';
import './App.css';
import NameList from'./NameList.js';

const names = [
  {
              "id":1,
                "name": "Sandy"
             },
             {
              "id":2,
                "name": "Stuart"
             },
             {
              "id":3,
                "name": "Ben"
             },
             {
              "id":4,
                "name": "Kerri"
             },
             {
              "id":5,
                "name": "Laiqah"
             }

];

localStorage.setItem('names', JSON.stringify(names));


class App extends Component {
    constructor(props) {
      super(props);

      this.state = {
        names: JSON.parse(localStorage.getItem('names'))
      };

      this.onDelete = this.onDelete.bind(this);
    }

   componentWillMount() {   
    const names = this.getNames();

    this.setState({ names });
   }
   getNames()
{
  return this.state.names;
    
   }

   onDelete (name){
       console.log(name);
      const names = this.getNames();

      const filteredNames = names.filter(name => {
        return name.name !== name;
      });

         console.log(filteredNames)
      this.setState({names: filteredNames})
   }
	render() {
    return (
      <div className = "table">
       <h1> Name List </h1>
       <table>
       <tr><td>ID</td>
       {` | `}
       <td>Name</td></tr>
      </table>
       {
        this.state.names.map(name => {
         return (
           <NameList
             key={name.name}
             {...name}
            onDelete={this.onDelete}
           />
         );
       })
     }
      </div>
    );
  }
}

export default App;
