// DocumentViewer.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function DocumentViewer() {
    const { id } = useParams();
    const [document, setDocument] = useState(null);

    useEffect(() => {
        const fetchDocument = async () => {
            try {
                const response = await axios.get(`/api/documents/${id}`);
                setDocument(response.data);
            } catch (error) {
                console.error('Failed to fetch document', error);
            }
        };

        fetchDocument();
    }, [id]);

    if (!document) return <div>Loading...</div>;

    return (
        <div>
            <h1>{document.title}</h1>
            <p>{document.content}</p>
            {/* 这里可以添加更多查看或编辑文档的功能 */}
        </div>
    );
}

export default DocumentViewer;

