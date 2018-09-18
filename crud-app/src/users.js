import React from 'react';
import {List, Edit, Create, Datagrid, TextField, EditButton, DisabledInput, SimpleForm, TextInput} from 'react-admin';

export const UserList = (props) => (
       <List {...props}> 
          <Datagrid>
              <TextField source="id" />
              <TextField source="name" />
              <EditButton />
           </Datagrid>
        </List>
      );

const UserTitle =({record}) => {
	return <span>User {record ? '"${record.title}"' : ''}</span>;
};

export const UserEdit = (props) => (
       <Edit title={<UserTitle />} {...props}> 
          <SimpleForm>
              <DisabledInput source="id" />
              <TextInput source="name" />
           </SimpleForm>
        </Edit>
      );

export const UserCreate = (props) => (
       <Create {...props}> 
          <SimpleForm>
              <DisabledInput source="id" />
              <TextInput source="name" />
           </SimpleForm>
        </Create>
      );

