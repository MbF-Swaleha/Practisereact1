import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import Name from './Name';
import EditComponent from './EditComponent';

class allName extends Component {
  render() {   
      return (      
        <div>
          <h3>All Names</h3>
           {this.props.names.map((name) => (
              <div key={name.id}>
                {name.editing ? <EditComponent name={name} key={name.id} /> :
           	       <Name key={name.id} name={name} />}
              </div>
             ))}
        </div>
     );
   }
}

const mapStateToProps = (state) => {
	return {
		names: state
	}
}

export default connect(mapStateToProps)(allName);