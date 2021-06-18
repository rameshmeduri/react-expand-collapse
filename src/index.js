import React from 'react';
import { render } from 'react-dom';
import CollapsiblePanel from './Components/CollapsiblePanel';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <CollapsiblePanel title="Client" isOpen={true}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.
  </CollapsiblePanel>
);

render(<App />, document.getElementById('root'));
