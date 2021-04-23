import axios from 'axios';
const instance = axios.create({
    baseURL: 'http://localhost:4000/api'
});

export const imagePath = 'http://localhost:4000/uploads/images'
export default instance;