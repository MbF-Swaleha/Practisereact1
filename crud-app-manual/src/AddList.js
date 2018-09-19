import React, { Component } from 'react';

class AddList extends Component {
	 constructor(props){
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.onAdd(this.nameInput.value);

    this.nameInput.value = '';

  } 

    render() {    
    return (
      <form onSubmit={this.onSubmit}>
        <h4>Add a Name</h4>
        <input placeholder="Name" ref={nameInput => this.nameInput = nameInput} />
        <button>Add</button>
         <hr />   
      </form>
    );
  }
}

export default AddList;