import React from 'react';
import UserList from '../../js/containers/userlist.js';
require('../../scss/style.scss');

const App = () => (
    <div>
       <h2>  Data items: </h2>
       <hr/>
       <UserList />
    </div>

	);

export default App;