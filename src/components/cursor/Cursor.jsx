import React, { useEffect, useState } from 'react';
import { getPhotosMode } from '../../services/UnspashApi';
import axios from 'axios';
import '../../styles/cursor/Cursor.scss';

const Cursor = ({cursorPosition}) => {

  // Contain the result of your request 
  const [data, setData] = useState([]);
  // Be true if the request is correct
  const [imgLoaded, setImgLoaded] = useState(false)

  // Get the photos
  const fetchData = async () => {
    try {
      const dataTemp = await axios.get(getPhotosMode('fashion+model'));
      setData(dataTemp.data.results);
      setImgLoaded(true)
    } catch (error) {
      setImgLoaded(false)
      console.log(error)
    }
  }

  const imgsFollowing = (param) => {
    if(imgLoaded){
      const imgs = document.getElementsByClassName('cursor-content-imgs');
      
      imgs[4].style.transform = 'translate('+param.pageX+'px,'+param.pageY+'px)';
  
      setTimeout(() => {
        imgs[3].style.transform = 'translate('+param.pageX+'px,'+param.pageY+'px)'
      }, 100);
      setTimeout(() => {
        imgs[2].style.transform = 'translate('+param.pageX+'px,'+param.pageY+'px)'
      }, 200);
      setTimeout(() => {
        imgs[1].style.transform = 'translate('+param.pageX+'px,'+param.pageY+'px)'
      }, 300);
      setTimeout(() => {
        imgs[0].style.transform = 'translate('+param.pageX+'px,'+param.pageY+'px)'
      }, 400);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  useEffect(() => {
    imgsFollowing(cursorPosition)
  }, [cursorPosition])

  return ( <>
    <div className="cursor">
      <div className="cursor-content">
        {
          (imgLoaded) &&
          data.map(item =>
            <div key={item.id} className="cursor-content-imgs">
              <img src={item.urls.full} alt="" />  
            </div>
          )
        }
      </div>
    </div>
  </> );
}
 
export default Cursor;