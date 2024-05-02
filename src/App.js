// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import UploadDocument from './UploadDocument';
import DocumentList from './DocumentList';
import DocumentViewer from './DocumentViewer';

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/upload" component={UploadDocument} />
                <Route path="/documents" component={DocumentList} />
                <Route path="/document/:id" component={DocumentViewer} />
                <Route path="/" exact component={() => <h1>Welcome Home</h1>} />
            </Switch>
        </Router>
    );
}

export default App;

