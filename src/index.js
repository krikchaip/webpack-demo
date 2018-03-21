import _ from 'lodash';
import './style.css';
import Icon from './icon.jpg';
import Data from './data.xml'; // able to import JSON without any loader

function component() {
  var element = document.createElement('div');

  // Lodash, initially included via a script, is required for this line to work
  // now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  var myIcon = new Image();
  myIcon.src = Icon;
  
  element.appendChild(myIcon);

  console.log(Data);

  return element;
}

document.body.appendChild(component());