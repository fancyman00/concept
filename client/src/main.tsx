import { createRoot } from 'react-dom/client';
import { App } from './app';
import { StrictMode } from 'react';
import './shared/assets/fonts/Gilroy/stylesheet.css'
// @ts-ignore fuck u
const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
