// EvaluationForm.js
import React, { useState } from 'react';
import axios from 'axios';

function EvaluationForm({ annotationId }) {
    const [criterion, setCriterion] = useState('');
    const [comment, setComment] = useState('');

    const handleCriterionChange = (event) => {
        setCriterion(event.target.value);
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const submitEvaluation = async () => {
        if (criterion) {
            try {
                await axios.post(`/api/evaluations`, {
                    annotationId: annotationId,
                    criterion: criterion,
                    comment: comment
                });
                alert('Evaluation submitted successfully!');
                setCriterion('');
                setComment('');
            } catch (error) {
                console.error('Error posting evaluation', error);
            }
        }
    };

    return (
        <div>
            <h2>Evaluate Annotation</h2>
            <label>
                Criterion:
                <select value={criterion} onChange={handleCriterionChange}>
                    <option value="">Select Criterion</option>
                    <option value="clarity">Clarity</option>
                    <option value="relevance">Relevance</option>
                    <option value="accuracy">Accuracy</option>
                </select>
            </label>
            <br />
            <label>
                Comment:
                <textarea value={comment} onChange={handleCommentChange} />
            </label>
            <br />
            <button onClick={submitEvaluation}>Submit Evaluation</button>
        </div>
    );
}

export default EvaluationForm;

