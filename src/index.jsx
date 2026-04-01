import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <App />
  // </StrictMode>,
);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// ✨✨ Below code is from "How to Add React Router to Your Vite React Project" ✨✨
//
// // import React from 'react'; ✨✨
// import ReactDOM from 'react-dom/client'; ✨✨
// import { BrowserRouter } from 'react-router-dom'; ✨✨
// import App from './App';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render( // ✨ This lines different
//   <React.StrictMode>
//     <BrowserRouter> ✨✨ Add this - Wrap <App></App> inside  <BrowserRouter>
//       <App />
//     </BrowserRouter> ✨✨ Add this - Wrap <App></App> inside  <BrowserRouter>
//   </React.StrictMode>
// );
