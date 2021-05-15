import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://travelogic.herokuapp.com/api',
    withCredentials: true,
    credentials: 'include'
});

// instance.defaults.headers.delete['Authorization']= 

export const imagePath = 'https://travelogic.herokuapp.com/uploads/images'
export default instance;
