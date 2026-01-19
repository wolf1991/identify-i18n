import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Responsive REM scaling
const setRem = () => {
    // 750px 设计稿基准
    const designWidth = 750;
    const clientWidth = document.documentElement.clientWidth || window.innerWidth;

    // 限制最大宽度 (PC 端预览)
    const maxWidth = 750;
    const effectiveWidth = Math.min(clientWidth, maxWidth);

    // 1rem = 50px (在 750px 宽度下)
    // 这样设计稿标注 52px -> 代码填 0.52rem -> 实际渲染 26px (逻辑像素)
    const fontSize = (effectiveWidth / designWidth) * 100;
    document.documentElement.style.fontSize = fontSize + 'px';
};

setRem();
window.addEventListener('resize', setRem);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
