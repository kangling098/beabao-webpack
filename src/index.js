import './index.css'
let rihe = require('./rihe.jpg');
let img = new Image();
img.src = rihe;
document.body.appendChild(img);
document.querySelector('#root').innerHTML = 'hahah'