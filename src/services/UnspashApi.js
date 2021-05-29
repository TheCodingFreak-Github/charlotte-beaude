const url = 'https://api.unsplash.com/';

// Access Key from .env
const accessKey = process.env.REACT_APP_API_UNSPLASH_KEY;

const getPhotosMode = (param) => {
  return url +'search/photos?query='+ param +'&per_page=5&orientation=portrait&client_id=' + accessKey;
}

export{
  getPhotosMode
}