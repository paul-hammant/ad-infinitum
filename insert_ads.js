
var p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var newAdPartner = 'http://' + [...Array(2)].reduce(a=>a+p[~~(Math.random()*p.length)],'') + '.devd.io:';

var div = document.createElement('div');
div.innerHTML = "<span>Hi, I'm " + whoAmI + " the advertising partner of " + referer + ", let me add one more ad partner: " + newAdPartner + " ...</span>";
div.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
var js1 = document.createElement('script');
js1.src = newAdPartner + location.port + '/insert_ads.js';
div.appendChild(js1);

referer = whoAmI;
whoAmI = newAdPartner;

document.body.appendChild(div);
