
import axios from 'axios';
import dotenv from "dotenv"; 

dotenv.config();

const MY_TOKEN = process.env.MY_TOKEN; 
const BASE_URL = `https://api.telegram.org/bot${MY_TOKEN}`;

const axiosInstance = axios.create({
    baseURL: BASE_URL,
});

export { axiosInstance };
