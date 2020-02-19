function getComponent() {
  return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
    const element = document.createElement('div');
    element.innerHTML = _.join(['A1', 'B1'], ' ');
    return element;
  }).catch(e => 'An error occured while loading the component');
}

getComponent().then(component => {
  document.body.appendChild(component);
});
