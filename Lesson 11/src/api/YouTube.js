import axios from 'axios';

const KEY= 'AIzaSyCJLFhZfnpkbnaY3z3krm7lyb45XYCFCOw';

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
       part: 'snippet',
       maxResults: 5,
       key: KEY,
       type: 'video'
    }
});

