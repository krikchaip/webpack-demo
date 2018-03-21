import _ from 'lodash';
import './style.css';

function component() {
  var element = document.createElement('div');

  // Lodash, initially included via a script, is required for this line to work
  // now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());