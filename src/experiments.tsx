
import { Datagrid, DateField, List, TextField, SimpleList } from 'react-admin';
import { Create, SimpleForm, DateInput, required } from 'react-admin';

import { TextInput } from 'react-admin';

const postFilters = [
    <TextInput label="Search" source="q" alwaysOn />,
    <TextInput label="Title" source="title" defaultValue="Hello, World!" />,
];

export const ExperimentCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="id" validate={[required()]} fullWidth />
            <TextInput source="name" validate={[required()]} fullWidth />
            <DateInput label="Start date" source="startDate" defaultValue={new Date()} />
            <DateInput label="End date" source="endDate"  />
            <TextInput label="Status" source="status" validate={[required()]} fullWidth />
            <TextInput label="Hypothesis" source="hypothesis" validate={[required()]} fullWidth />
            <TextInput label="Goals" source="keyMetrics" validate={[required()]} fullWidth />
            <TextInput label="Variant Details" source="variantDetails" validate={[required()]} fullWidth />
            <TextInput label="User Group" source="targetUserGroup" validate={[required()]} fullWidth />
        </SimpleForm>
    </Create>
);

export const ExperimentList = () => (
    <List filters={postFilters}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <DateField source="startDate" />
            <DateField source="endDate" />
            <TextField source="status" />
            <TextField source="keyMetrics" />
            <TextField source="hypothesis" />
            <TextField source="variantDetails" />
            <TextField source="targetUserGroup" />
        </Datagrid>
    </List>
);