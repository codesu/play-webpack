import './style.css';
import Icon from './icon.jpg';
import { join } from 'lodash';

function component() {
  const element = document.createElement('div');
  element.innerHTML = join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const imgEle = new Image();
  imgEle.src = Icon;
  element.appendChild(imgEle);

  return element
}

document.body.appendChild(component());
