import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/zeleny-e266c/us-central1/app", // Reemplaza esta URL con la URL base que deseas utilizar
});



export default axiosInstance;