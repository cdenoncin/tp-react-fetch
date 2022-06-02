import axios from 'axios'

const query = axios.create({
    baseURL: 'http://localhost:8000/api',
    withCredentials : true
});

export default query;
