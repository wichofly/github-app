import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar title="Github Finder" />
    </Router>
  );
}

export default App;
