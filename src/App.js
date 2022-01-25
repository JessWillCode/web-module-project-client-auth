import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <h2>Client Auth Project</h2>
      <Route path='/login' component={Login} />
      <Route path='/' component={Login} />
    </div>
  );
}

export default App;
