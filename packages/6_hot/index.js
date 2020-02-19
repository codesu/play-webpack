import styles from './style.css';
// 这里写成'./print'时，热更新得到的printMe不会变，还是原来的值拷贝
import printMe from './print.js';
import { join } from 'lodash';

function component() {
  const element = document.createElement('div');
  element.innerHTML = join(['A1', 'B1'], ' ');
  element.classList.add('hello');

  const btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console';
  btn.onclick = printMe;
  console.log(printMe)
  element.appendChild(btn);
  return element
}
let element = component();
document.body.appendChild(element);

// 热更新逻辑，从子module冒泡出来，如果是顶层代码更新，直接刷新页面
if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  })
}
