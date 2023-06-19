
import { Datagrid, DateField, List, TextField, SimpleList } from 'react-admin';
import { Create, SimpleForm, DateInput, required } from 'react-admin';

import { TextInput } from 'react-admin';

const postFilters = [
    <TextInput label="Search" source="q" alwaysOn />,
    <TextInput label="Title" source="title" defaultValue="Hello, World!" />,
];

export const VariantCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="id" validate={[required()]} fullWidth />
            <TextInput source="variantName" validate={[required()]} fullWidth />
            <TextInput source="variantDetails" validate={[required()]} fullWidth />
        </SimpleForm>
    </Create>
);

export const VariantList = () => (
    <List filters={postFilters}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="variantName" />
            <TextField source="variantDetails" />
        </Datagrid>
    </List>
);