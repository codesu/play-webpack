import { join } from 'lodash';

function component() {
  var element = document.createElement('div');
  element.innerHTML = join(['A1', 'B1'], ' ')
  return element
}

document.body.appendChild(component())
