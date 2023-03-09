// testing index.test
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './utils/global';

// rendering main App 
describe('App component', () => {
  it('renders without crashing', () => {
    const div : HTMLDivElement = document.createElement('div');
    ReactDOM.render(
      <React.StrictMode>
        <GlobalStyle />
        <App />
      </React.StrictMode>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
