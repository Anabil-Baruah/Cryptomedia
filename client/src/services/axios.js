import axios from 'axios';
// const baseURL = 'http://localhost:8080';
const baseURL = 'https://cryptomedia.onrender.com';

const jwtToken = localStorage.getItem('accessToken');
axios.defaults.headers.common['Authorization'] = `${jwtToken}`;

export default axios.create({
    baseURL: baseURL,
})