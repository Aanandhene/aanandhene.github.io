import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Update document title
document.title = 'Anandhene - Senior Data Engineer';

// Update meta description
const metaDescription = document.createElement('meta');
metaDescription.name = 'description';
metaDescription.content = 'Senior Data Engineer with 8+ years of experience in building scalable data pipelines, data warehouses, and analytics platforms. Expertise in cloud data platforms, ETL/ELT processes.';
document.head.appendChild(metaDescription);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
