'use client'

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ErrorBoundary } from 'react-error-boundary';
import Fallback from './Fallback';

const logError = (error: Error, info: React.ErrorInfo) => {
  console.log("Ran into a problem", error, info)
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <ErrorBoundary FallbackComponent={Fallback} onError={logError}>
      <App />
    </ErrorBoundary>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();