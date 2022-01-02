import {useEffect, useState} from 'react';
import Mobile from './components/mobile/Mobile';
import Desktop from './components/desktop/Desktop'

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
      {isMobile? <Mobile/>:<Desktop />}
    </div>
  );
}