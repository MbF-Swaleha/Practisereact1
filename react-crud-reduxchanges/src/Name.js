import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';

class Name extends Component {
	render() {
		return (
         <div>
           <p>{this.props.name.name}</p>
           <button
           onClick={()=>this.props.dispatch({type:'EDIT_NAME', id:this.props.name.id})}>
           Edit </button>
           <button
           onClick={()=>this.props.dispatch({type:'DELETE_NAME', id:this.props.name.id})}> 
           Delete </button>
          </div>
		);
	}
}

export default connect()(Name);