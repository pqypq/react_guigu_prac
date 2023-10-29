// import the core of react
import React from 'react'
// import the ReactDOM
import ReactDOM from 'react-dom/client'
// import App
import App from './App'

// 渲染App到页面
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
);