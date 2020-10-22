import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CalendarView from './pages/CalendarView';
import FormView from './pages/FormView';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/book'>
          <FormView />
        </Route>
        <Route path='/'>
          <CalendarView />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
