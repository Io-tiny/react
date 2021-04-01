import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const h1 = (<h1>黑哥真帅<span> 淦 </span><span>骗人</span></h1>)
const url = ['./img/3.jpg', './img/4.jpg', './img/5.jpg']
let i = 0;
let timer = setInterval(() => {
  if (i === 3) {
    i = 0;
  }
  ReactDOM.render(
    <img src={url[i]} alt="." />,
    document.getElementById('container')
  );
  i++;
}, 1000);

document.getElementById('container').onmouseenter = () => {
  clearInterval(timer);
}
document.getElementById('container').onmouseleave = () => {
  clearInterval(timer);
  timer = setInterval(() => {
    if (i === 3) {
      i = 0;
    }
    ReactDOM.render(
      <img src={url[i]} alt="." />,
      document.getElementById('container')
    );
    i++;
  }, 1000);
}