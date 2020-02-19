import styles from './style.css';
import printMe from './print';
import { join } from 'lodash';

function component() {
  const element = document.createElement('div');
  element.innerHTML = join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console';
  btn.onclick = printMe;

  element.appendChild(btn);
  return element
}

document.body.appendChild(component());
