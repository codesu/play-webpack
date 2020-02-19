import { cube } from './math.js';

function component() {
  const element = document.createElement('pre');

  element.innerHTML = [
    'A1',
    `5 cubed is equal to ${cube(5)}`,
  ].join('\n\n');
  return element
}
let element = component();
document.body.appendChild(element);
