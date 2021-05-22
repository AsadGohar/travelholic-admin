import axios from 'axios';
const instance = axios.create({
    // baseURL: 'https://travelogic.herokuapp.com/api',
    baseURL: 'https://travelogic.glitch.me/api',
    withCredentials: true,
    credentials: 'include'
});

// instance.defaults.headers.delete['Authorization']= 

// export const imagePath = 'https://travelogic.herokuapp.com/uploads/images'
export const imagePath = 'https://travelogic.glitch.me/uploads/images'
export const tripImagePath = 'https://travelogic.glitch.me/uploads/trips'

export default instance;
