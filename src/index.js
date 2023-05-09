import React from 'react';
import ReactDOM from 'react-dom/client';
import { Video } from './components/Video/Video.jsx';
// import { Reader } from 'components/Reader/Reader';
import './index.css';
// import publications from './data/publications.json';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Reader items={publications} /> */}
    <Video />
  </React.StrictMode>
);