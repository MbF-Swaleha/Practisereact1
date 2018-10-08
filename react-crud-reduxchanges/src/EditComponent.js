import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';

class EditComponent extends Component {
   handleEdit = (e) => {
    e.preventDefault();
    const newName = this.getName.value;
    const data = {
      newName
    }
    this.props.dispatch({
        type: 'UPDATE',
        id: this.props.name.id,
        data: data})
    
   }

  render() {   
      return (      
        <div>
          <h3>Update the name</h3>
            <form onSubmit={this.handleEdit}>
              <input required type="text" ref={(input)=>this.getName = input} defaultValue={this.props.name.name} placeholder="Submit a name" />
              <br/>
              <button>Update</button>
             </form> 
        </div>
     );
   }
}


export default connect() (EditComponent);
