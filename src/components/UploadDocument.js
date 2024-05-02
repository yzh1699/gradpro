// UploadDocument.js
import React, { useState } from 'react';
import axios from 'axios';

function UploadDocument() {
    const [file, setFile] = useState(null);

    const onFileChange = event => {
        setFile(event.target.files[0]);
    };

    const onSubmit = async event => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        try {
            const response = await axios.post('http://localhost:3000/documents/upload', formData);
            console.log(response.data); // Assuming the backend sends back some information
            alert('Document uploaded successfully!');
        } catch (error) {
            console.error('Failed to upload document', error);
            alert('Failed to upload document.');
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <input type="file" onChange={onFileChange} />
            <button type="submit">Upload Document</button>
        </form>
    );
}

export default UploadDocument;

