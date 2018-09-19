import React, { Component } from 'react';

class NameList extends Component {
	constructor(props){
    super(props);

    this.state = {
     isEdit: false
    };

    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  onDelete() {
    const {onDelete, name} = this.props;
    onDelete(name);

  }

  onEdit() {
   this.setState({ isEdit: true });
  }

    onEditSubmit(event) {
     event.preventDefault();
     this.props.onEditSubmit(this.nameInput.value, this.props.name);
     
     this.setState({ isEdit: false });

  }


  render() {
     const {name} = this.props;

    return (
      <div>
      {
        this.state.isEdit
            ? (
           <form onSubmit={this.onEditSubmit}>
            <input placeholder="Name" ref={nameInput => this.nameInput = nameInput} defaultValue={name} />
            <button>Save</button>
           </form> 
            )
           : (
          <div>
          <table>
         <tbody>
             <tr>
              <td>{name}</td>
              <button onClick={this.onDelete}>Delete</button> 
              <button onClick={this.onEdit}>Edit</button>               
              </tr>
              </tbody>
            </table>
            </div>
           )
      }
        
           </div>
      
    );
  }
}

export default NameList;
