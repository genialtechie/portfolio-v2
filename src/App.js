import './App.css';
import Navigation from './components/Navigation';
import Homepage from './components/Homepage';
import MyWork from './components/MyWork';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Homepage />
      <hr />
      <MyWork />
    </div>
  );
}

export default App;
