import './App.css';
import Header from '../src/components/Header'; // Import the Header component
import Home from '../src/pages/Home';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter

function App() {
  return (
    <Router>
      <div className="App">
        {/* Include Header component */}
        <Header />

        <Home />
      </div>
    </Router>
  );
}

export default App;



