import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Layout from './components/Layout.jsx';
import store from './store';

const app = document.getElementById('app');
const rootComponents = <Provider store={store}><Layout /></Provider>;
ReactDOM.render(rootComponents,app);