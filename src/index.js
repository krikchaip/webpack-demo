import { cube } from './math';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

// Note that we did not import the square method from the src/math.js module.
// That function is what's known as "dead code", meaning an unused export that should be dropped.

// we use "sideEffects" property to provide hints to webpack's compiler on the "pureness" of your code.
// visit: https://webpack.js.org/guides/tree-shaking/

function component() {
  var element = document.createElement('pre');

  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');

  return element;
}

document.body.appendChild(component());