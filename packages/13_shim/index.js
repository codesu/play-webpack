// import * as global from './global.js';
// const global = require('./global.js');

function component() {
  const element = document.createElement('div');
  element.innerHTML = join(['A1', 'B1'], ' ');
  this.alert('alert');
  return element;
}

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(json => {
  console.log(json)
})
.catch(error => console.error(error))

document.body.appendChild(component());
