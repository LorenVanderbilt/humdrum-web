import Home from './components/home/Home'
import {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  } 

  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

  let isMobile = width <= 768? true: false;

  return (
    <div className="App">
      {isMobile? <div>MOBILE COMING SOON</div>:<Home />}
    </div>
  );
}

export default App;
