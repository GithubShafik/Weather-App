import { Link } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import 'leaflet/dist/leaflet.css';
import About from './Pages/About';

function App() {
  return (
    <div className=' dark:bg-gray-800'>
     <Home/>
    </div>
  );
}

export default App;
