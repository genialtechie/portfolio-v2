import './App.css';
import Navigation from './components/Navigation';
import Homepage from './components/Homepage';
import MyWork from './components/MyWork';
import Contact from './components/Contact';
import { useRef } from 'react';

function App() {
  const reference = useRef(null);
  return (
    <div className="App">
      <Navigation />
      <Homepage reference={reference} />
      <MyWork ref={reference} />
      <Contact />
    </div>
  );
}

export default App;
