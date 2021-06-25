import Home from './components/home/home';
import Mobile from './components/Mobile/Mobile';
import {useEffect, useState} from 'react';
import './App.css';

export default function App() {
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
      {isMobile? <Mobile/>:<Home />}
    </div>
  );
}