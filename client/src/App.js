import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CalendarPage from './pages/CalendarPage';
import BookingFormPage from './pages/BookingFormPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/book'>
          <BookingFormPage />
        </Route>
        <Route path='/'>
          <CalendarPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
