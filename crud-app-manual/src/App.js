import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.deleteTask =this.deleteTask.bind(this);
		this.state = {
		  data:
		  [
             {
             	"id":1,
                "name": "Simon"
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
		  ]
		}

	}
    deleteTask(names){
    	var index= this.state.names.indexOf(names);
    	           this.state.names.splice(index,1);
    	           this.setState(this.state.names);

    };
  render() {
    return (

      <div className = "table">
      <h1>List of names</h1>
        <table>
          <tbody>
            <tr>
            <td>ID</td>
            <td>Name</td>

            </tr>
            {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />  )}
           </tbody>
         </table>
      </div>
    );
  }
}

  class TableRow extends Component {
    render() {
    	return (
             <tr>             
               <td>{this.props.data.id}</td>
               <td>{this.props.data.name}</td>
               <td><input type="button" value="Delete" className="delete" /></td> 

               
             </tr>
      );
    }

  }



export default App;
