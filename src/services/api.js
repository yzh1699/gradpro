// src/services/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

export const uploadDocument = (formData) => {
    return axios.post(`${API_BASE_URL}/documents/upload`, formData);
};

export const fetchDocuments = () => {
    return axios.get(`${API_BASE_URL}/documents`);
};

export const createAnnotation = (data) => {
    return axios.post(`${API_BASE_URL}/annotations`, data);
};

// 更多API调用

