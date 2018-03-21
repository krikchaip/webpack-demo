import _ from 'lodash';
import printMe from './print';
import './style.css';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  // Lodash, initially included via a script, is required for this line to work
  // now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  
  element.appendChild(btn);

  return element;
}

// Store the element to re-render on print.js changes
let element = component();

// document.body.appendChild(component());
document.body.appendChild(element);

// if enable hot reload
if (module.hot) {
  // when a change inside print.js is detected we tell webpack to accept the updated module.
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');

    // this changed. but the button's onclick event handler is still bound to the original printMe function.
    printMe();

    document.body.removeChild(element);
    element = component(); // Re-render the "component" to update the click handler
    document.body.appendChild(element);
  })
}