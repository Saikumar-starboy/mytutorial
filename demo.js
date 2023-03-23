var newDiv = document.createElement('div');

newDiv.className='Hello';
newDiv.id = 'hello1';

newDiv.setAttribute('title','Hello div');

var newDivText = document.createTextNode('HEllo ');

newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

container.insertBefore(newDiv,h1);

console.log(newDiv);

// adding hello before item1
var parentNode = document.getElementById('items');
var element = parentNode.innerHTML;
var text = '<li>HELLo</li>';

parentNode.innerHTML = text + parentNode.innerHTML;


