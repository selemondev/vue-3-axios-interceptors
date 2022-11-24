import axios from "axios";
const baseURL = 'https://dummyjson.com';
const apiClient = axios.create({
    baseURL,
    headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
    },
    validateStatus: () => true,
});

export default apiClient;