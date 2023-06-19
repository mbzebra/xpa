// import fakeRestDataProvider from 'ra-data-fakerest';
// import data from './data.json';

import jsonServerProvider from 'ra-data-json-server';

export const dataProvider = jsonServerProvider(
//     'https://jsonplaceholder.typicode.com'
        'http://127.0.0.1:3000'
);

// export const dataProvider = fakeRestDataProvider(data, true);
