import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as nameAction from './actions/nameAction';


class App extends Component {
  constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {
       name: '',
       isEditing: false
      };
      this.onEdit = this.onEdit.bind(this);
  }

  onEdit() {
   this.setState({ isEdit: true });
  }

    

  handleChange(e) {
      this.setState({ 
        name: e.target.value 
      })
  }

   handleSubmit(e) {
      e.preventDefault();
      let name = {
        name:this.state.name
      }
      this.props.createName(name);
      this.setState({ isEdit: false });
  }

  listView(data, index){
    return (
       <div className="row">
        <div className="col-md-10">
          <li key={index} className="list-group-item clearfix">
           {data.name}
          </li>
         </div>
        <div className="col-md-2">
          <button onClick={(e) => this.deleteName(e, index)} className="btn red btn-danger">
           Delete
          </button>
          <button onClick={this.onEdit}> Edit </button>
        </div>
      </div>

      )
  }

  deleteName(e, index){
    e.preventDefault();
    this.props.deleteName(index);
  }

  render() {
    
      return (
        
        <div>
        
          
          <h1>Name List</h1>      
          <div>
            <h3>Submit a name</h3>
            <form onSubmit={this.handleSubmit}>
              <input type="text" onChange={this.handleChange} className="form-control" value={this.state.name} /><br/>
              <input type="submit" className="btn btn-success" value="Submit"/>
             </form> 

             <hr />
          { <ul>
             {this.props.names.map((name, i) => this.listView(name, i))}
             </ul> }
          </div>
        </div>
     );
   }
}

const mapStateToProps = (state, ownProps) => {
  return {
    names: state.names

  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createName: name => dispatch(nameAction.createName(name)),
    deleteName: index => dispatch(nameAction.deleteName(index))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
