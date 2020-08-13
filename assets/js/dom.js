//dom.js
/**
document.getElementById(id)
document.querySelector(css)
document.querySelectorAll(css)
**/

/**let foot = document.getElementById("foot");
let p = document.getElementById("para");
p.textContent = "First Paragraph";

let p2 = document.querySelector("p.some");
p2.textContent = "Second Paragraph";

let ps = document.querySelectorAll("p");
for(var i=0, num=ps.length; i<num; i++){
    ps[i].textContent += " LOOPED";
}
**/

let main = document.querySelector('.main');
let h3 = main.querySelector('h3');
h3.textContent = 'Loading Countries';

let p = main.querySelector('p');
p.innerHTML = 'And now a list of <strong>COUNTRIES</strong>';

let ul = document.createElement('ul');
main.appendChild(ul);

countries.forEach(function(item){
    let li = document.createElement('li');
    let txt = document.createTextNode(item);
    li.appendChild(txt);
    ul.appendChild(li);
});