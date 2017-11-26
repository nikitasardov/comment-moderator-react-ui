import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Layout from './components/Layout.jsx';
import store from './store';

const app = document.getElementById('app');
const rootComponents = <Provider store={store}>
    <div className="ui content" style={{'background': '#666', 'overflowY': 'scroll', 'height': '100vh'}}>
        <Layout />
    </div>
    </Provider>;
ReactDOM.render(rootComponents,app);
