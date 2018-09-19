import React, { Component } from 'react';
import './App.css';
import NameList from './NameList.js';
import AddList from './AddList.js';

const names = [
  {
              
                "name": "Sandy",
                //"id":1
             },
             {
              
                "name": "Stuart",
                //"id":2
             },
             {
              
                "name": "Ben",
                //"id":3
             },
             {
              
                "name": "Kerri",
                //"id":4
             },
             {
              
                "name": "Laiqah",
                //"id":5
             }

];

localStorage.setItem('names', JSON.stringify(names));


class App extends Component {
    constructor(props) {
      super(props);

      this.state = {
        names: JSON.parse(localStorage.getItem('names'))
      };

      this.onAdd = this.onAdd.bind(this);
      this.onDelete = this.onDelete.bind(this);
      this.onEditSubmit = this.onEditSubmit.bind(this);
    }

   componentWillMount() {   
    const names = this.getNames();

    this.setState({ names });
   }
   getNames()
{
  return this.state.names;
    
   }

   onAdd(name){
     const names = this.getNames();

     names.push({
      name
     }); 

     this.setState({ names });
   }

   onDelete (name){
      //console.log(name);
      const names = this.getNames();

      const filteredNames = names.filter(name => {
        return name.name.filteredNames !== name.filteredNames;
      });

         //console.log(filteredNames)
      this.setState({ names: filteredNames })
   }
     
      onEditSubmit(name, originalName) {
        //console.log(name);
        let names = this.getNames();

        names = names.map(name => {
          if (name.name === originalName) {
          name.name = name;
        }

        return name;

        });

        this.setState({names});
      }

	render() {
    return (
      <div className = "table">
       <h1> Name List </h1>

       <AddList
        onAdd={this.onAdd}
       />

       <table>
       <tr>
       <td>Name</td></tr>
      </table>
       {
        this.state.names.map(name => {
         return (
           <NameList
             key={name.name}
             {...name}
            onDelete={this.onDelete}
            onEditSubmit={this.onEditSubmit}
           />
         );
       })
     }
      </div>
    );
  }
}

export default App;
