import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'mobx-react';
import stores from './stores';
import './index.css';

ReactDOM.render(
  <Provider contacts={stores.contacts}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);