import React from 'react';
import {List, Datagrid, TextField} from 'react-admin';

export const PostList = (props) => (
       <List {...props}> 
          <Datagrid>
              <TextField source="id" />
              <TextField source="userId" />
              <TextField source="title" />
              <TextField source="body" />
           </Datagrid>
        </List>
      );

