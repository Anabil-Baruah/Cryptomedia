import axios from 'axios';

const jwtToken = localStorage.getItem('accessToken');
axios.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;

export default axios.create({
    baseURL: 'http://localhost:8080',
})