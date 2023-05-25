import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

import { HeroesApp } from './HeroesApp';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HeroesApp />
  </React.StrictMode>,
)
