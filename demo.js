var item = document.querySelector('.list-group-item:nth-child(2)');
item.style.backgroundColor = "green";

var item1 = document.querySelector('.list-group-item:nth-child(3)');
item1.style.visibility = "hidden";

var items2 = document.querySelectorAll('.list-group-item');
 items2[1].style.color = 'red';

 var odd = document.querySelectorAll('.list-group-item:nth-child(odd)');

 for(var i=0;i<odd.length;i++){
 odd[i].style.backgroundColor = "green";
 }