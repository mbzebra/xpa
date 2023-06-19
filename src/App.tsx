
import { Admin, Resource } from "react-admin";
import { dataProvider } from './dataProvider';
import { authProvider } from './authProvider';
import { ExperimentList } from "./experiments";
import { ExperimentCreate } from './experiments';
import { UserList } from "./users";
import { UserCreate } from './users';
import { VariantList } from "./variants";
import { VariantCreate } from './variants';



export const App = () => (
    <Admin
        dataProvider={dataProvider}
		authProvider={authProvider}
	>

        <Resource name="experiments" list={ExperimentList} create={ExperimentCreate} />
        <Resource name="users" list={UserList} create={UserCreate} />
        <Resource name="variants" list={VariantList} create={VariantCreate} />

    </Admin>
);

    