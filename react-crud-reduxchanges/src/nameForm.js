import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';


class nameForm extends Component {
   handleSubmit = (e) => {
    e.preventDefault();
    const name = this.getName.value;
    const data = {
      id: new Date(),
      name,
      editing: false
    }
    this.props.dispatch({
        type: 'ADD_NAME',
        data});
       this.getName.value = '';
    
   }

  render() {   
      return (      
        <div>
          <h3>Submit a name</h3>
            <form onSubmit={this.handleSubmit}>
              <input required type="text" ref={(input)=>this.getName = input} placeholder="Submit a name" />
              <br/>
              <button>Submit</button>
             </form> 
        </div>
     );
   }
}


export default connect() (nameForm);
