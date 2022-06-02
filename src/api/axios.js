import axios from 'axios'

const query = axios.create({
    baseURL: 'http://localhost:8000/api',
    timeout: 1000,
    withCredentials : true
});

export default query;
