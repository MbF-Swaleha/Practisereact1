import React, { Component, PropTypes } from 'react';
import NameForm from './nameForm';
import  AllName from './allName';


class App extends Component {
  render() {   
      return (      
        <div className="App">
          <NameForm />
         <AllName />
        </div>
     );
   }
}


export default App;
