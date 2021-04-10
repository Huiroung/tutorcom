import { BrowserRouter as Router, Route } from 'react-router-dom';

import Homepage from './components/Homepage';
import Registration from './components/Registration';
import Student from './pages/student.page';
import Application from './pages/application.page';

function App() {
  return (
    <div className="App container">
      <Router>
        <Route path="/" exact component={Homepage} />
        <Route path="/register"exact component={Registration} />
        <Route path="/home"exact component={Student} />
        <Route path="/apply"exact component={Application} />
      </Router>
    </div>
  );
}

export default App;
