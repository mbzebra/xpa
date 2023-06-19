
import { Datagrid, DateField, List, TextField, SimpleList } from 'react-admin';
import { Create, SimpleForm, DateInput, required } from 'react-admin';

import { TextInput } from 'react-admin';

const postFilters = [
    <TextInput label="Search" source="q" alwaysOn />,
    <TextInput label="Title" source="title" defaultValue="Hello, World!" />,
];

export const UserCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="id" validate={[required()]} fullWidth />
            <TextInput source="groupName" validate={[required()]} fullWidth />
            <TextInput source="userDetails" validate={[required()]} fullWidth />
        </SimpleForm>
    </Create>
);

export const UserList = () => (
    <List filters={postFilters}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="groupName" />
            <TextField source="userDetails" />
        </Datagrid>
    </List>
);