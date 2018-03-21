function getComponent() {
  // Note the use of webpackChunkName in the comment.
  // This will cause our separate bundle to be named lodash.bundle.js instead of just [id].bundle.js.
  return import(/* webpackChunkName: "lodash" */ 'lodash')
    .then(({ default: _ }) => {
      var element = document.createElement('div');
      element.innerHTML = _.join(['Hello', 'webpack'], ' ');
      return element;
    })
    .catch(error => 'An error occurred while loading the component');
}

getComponent().then(component => {
  document.body.appendChild(component);
})
