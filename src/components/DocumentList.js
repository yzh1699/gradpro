// DocumentList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function DocumentList() {
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        const fetchDocuments = async () => {
            try {
                const response = await axios.get('/api/documents');
                setDocuments(response.data);
            } catch (error) {
                console.error('Failed to fetch documents', error);
            }
        };

        fetchDocuments();
    }, []);

    return (
        <div>
            <h1>Document List</h1>
            <ul>
                {documents.map(doc => (
                    <li key={doc.id}>
                        <Link to={`/document/${doc.id}`}>{doc.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DocumentList;

