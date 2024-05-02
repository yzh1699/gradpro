// AnnotationTool.js
import React, { useState } from 'react';
import axios from 'axios';

function AnnotationTool({ documentId }) {
    const [annotation, setAnnotation] = useState('');
    const [annotations, setAnnotations] = useState([]);

    const handleAnnotationChange = (event) => {
        setAnnotation(event.target.value);
    };

    const submitAnnotation = async () => {
        if (annotation.trim()) {
            try {
                const response = await axios.post('http://localhost:3000/annotations', {
                    documentId: documentId,
                    text: annotation,
                    page: 1 // This should be dynamically set if needed
                });
                setAnnotations([...annotations, response.data]);
                setAnnotation('');
            } catch (error) {
                console.error('Error posting annotation', error);
            }
        }
    };

    return (
        <div>
            <h2>Annotation Tool</h2>
            <textarea value={annotation} onChange={handleAnnotationChange} placeholder="Type your annotation here..." />
            <button onClick={submitAnnotation}>Submit Annotation</button>
            <ul>
                {annotations.map((ann, index) => (
                    <li key={index}>{ann.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default AnnotationTool;
