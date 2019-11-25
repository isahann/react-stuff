import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID bf12684758fdabd48d380f3b99af51304879199976fe83563fa71b40f6e4391d'
  }
});
