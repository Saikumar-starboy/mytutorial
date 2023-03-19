 console.log(document.domain);
 console.log(document.URL);
 console.log(document.title);
 console.log(document.doctype);
 console.log(document.head);
 console.log(document.body);
 console.log(document.all);
 console.log(document.forms);


getelementbyid
console.log(document.getElementById('header-title'));

var headTitle = document.getElementById('header-title');

console.log(headTitle);
headTitle.textContent = 'Hello';
headTitle.innerText = 'goodbye';
headTitle.innerHTML = '<h3>Hell0</h3>';;
header.style.borderBottom = 'solid 3px #000';
console.log(headTitle.innerText);

getelementbyclassname

var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'hellp';
items[1].style.fontweight = 'bold';
items[1].style.background = 'yellow';

for(var i=0;i<items.length;i++){
   items[i].style.backgroundColor = '#f4f4f4';
}

queryselector

 var header = document.querySelector('#main-header');
 header.style.borderBottom = 'solid 4px #ccc';

 var input = document.querySelector('input');
 input.value = 'HEllo world';

 var submit = document.querySelector('input[type="submit"]');
 submit.value="SEND";

 var item = document.querySelector('.list-group-item');
 item.style.color = 'red';

 var lastItem = document.querySelector('.list-group-item:last-child');
 lastItem.style.color = 'blue';

queryselector all //

var titles = document.querySelectorAll('.title');

console.log(titles);
titles[0].textContent = 'Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor = '#f4f4f4';
    even[i].style.backgroundColor = '#ccc';
 }