import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Container, Box } from "bloomer";

ReactDOM.render(
    <Container>
        <Box>
        	<App />
        </Box>
    </Container>,
    document.getElementById('root')
)