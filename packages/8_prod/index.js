import { cube } from './math.js';

console.log(`LOOKS LIKE THE NODE_ENV IS ${process.env.NODE_ENV}`)

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
