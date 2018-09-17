import React from 'react';
import UserList from '../../js/containers/userlist.js';
require('../../scss/style.scss');

const App = () => (
    <div>
       <h2> First Data item: </h2>
       <UserList />
       <hr/>
       <h2> Second Data item: </h2>
    </div>

	);

export default App;