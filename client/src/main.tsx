import { createRoot } from 'react-dom/client';
import { App } from './app';
import { StrictMode } from 'react';

// @ts-ignore fuck u
const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
