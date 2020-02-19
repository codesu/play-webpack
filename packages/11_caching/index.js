import _ from 'lodash';
// import Print from './print';

function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['A1', 'B1'], ' ')
  const button = document.createElement('button');
  // element.onclick = Print.bind(null, 'hello hello');
  return element;
}

document.body.appendChild(component());
