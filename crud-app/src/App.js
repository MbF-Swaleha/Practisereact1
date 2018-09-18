import React from 'react';
import { Admin, Resource } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'
import {PostList} from './posts.js';
import {UserList, UserEdit, UserCreate} from './users.js';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com')
const App = () => ( 
          <Admin dataProvider={dataProvider} > 
            <Resource name="posts" list={PostList}/>
            <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate}/>
          </Admin>
         );

export default App;

