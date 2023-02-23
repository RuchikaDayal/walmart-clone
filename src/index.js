import 'core-js-pure/features/global-this';

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import Store from './Reduxstore/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={Store}>
  <BrowserRouter><App /></BrowserRouter>
</Provider>)
