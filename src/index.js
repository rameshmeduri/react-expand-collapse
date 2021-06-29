import React from 'react';
import { render } from 'react-dom';
import Grid from './Components/Grid';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <div className="container">
    <Grid />
  </div>
);

render(<App />, document.getElementById('root'));
