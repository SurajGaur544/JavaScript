document.querySelector('.header').innerHTML = 'Hi, My Name is Suraj Kumar';
a = document.querySelector('.header');
a.style.color = 'red';

s = document.createElement('p');
text = document.createTextNode('Address: Kandriyawan Goshaiganj Ambedkar Nagar');
s.appendChild(text);
s.setAttribute('id','p1');
parentElem = document.querySelector('.container');
parentElem.appendChild(s);

d = document.querySelector('#p1');
d.style.color = 'blue';

// ---------------------------------------------------------------------------------------------------

pt = document.createElement('div');
txt = document.createTextNode('This is a div box');
pt.appendChild(txt);
pt.setAttribute('class','div');

parent = document.querySelector('.container');
parent.appendChild(pt);

a = document.querySelector('.div');
a.style.height = '200px';
a.style.width = '200px';
a.style.backgroundColor = 'lightblue';
a.style.border = '2px solid red';

