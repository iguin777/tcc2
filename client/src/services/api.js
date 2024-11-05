// src/services/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api', // Certifique-se de que esta URL está correta
});

export default api;

