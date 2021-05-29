import React, { useState } from 'react';
import Cursor from '../components/cursor/Cursor';
import '../styles/home/Home.scss'


const Home = (props) => {

  const [cursorPosition, setCursorPosition] = useState({})

  const handleMouseMove = (e) => {
    setCursorPosition({'pageX': e.pageX, 'pageY': e.pageY});
  }

  return ( <>
    <div className="home" onMouseMove={handleMouseMove}>
      <Cursor cursorPosition={cursorPosition} />
      <p>Maison belge aux accents européens</p>
    </div>
  </> );
}
 
export default Home;