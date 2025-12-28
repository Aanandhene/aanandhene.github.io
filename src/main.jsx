import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Update document title
document.title = 'Aanandhene M - Data Engineer';

// Update meta description
const metaDescription = document.createElement('meta');
metaDescription.name = 'description';
metaDescription.content = 'Data Engineer with 2+ years of experience building scalable, cloud-ready data platforms across streaming, batch, warehouse, and lakehouse systems. Skilled in Kafka, Apache Flink, Python, SQL, PostgreSQL, and real-time analytics.';
document.head.appendChild(metaDescription);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
