import axios from 'axios';

const api = axios.create({ 
    baseURL : 'https://api-trab-h1.herokuapp.com'
});


export default api;
