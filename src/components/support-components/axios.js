import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
const instance = axios.create({
    baseURL: 'http://travelogic.herokuapp.com/api',
    withCredentials: true,
    credentials: 'include'
});

// instance.defaults.headers.delete['Authorization']= 

export const imagePath = 'http://travelogic.herokuapp.com/uploads/images'
export default instance;
