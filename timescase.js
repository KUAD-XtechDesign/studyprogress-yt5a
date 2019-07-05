wih = window.innerHeight;
wiw = window.innerWidth;
pxl = wih/20;
pxt = wih/60;

document.getElementById("timescase").innerHTML = "<canvas id='canvas1'" +
"style='position:fixed;right:0;top:0;'" +
"height='" + wih + "'" +
"Width='" + pxl*3 + "'" +
"></canvas>";

var canvas = document.getElementById('canvas1');
var context = canvas.getContext('2d');

//setup
//secposition
secp = 0;
startset = 0;
//両枠
context.fillStyle = 'rgb(0,0,0)';
context.fillRect(0,secp,pxl,wih);
context.fillRect(pxl*2,secp,pxl,wih);

timerID = setInterval('gettime()',200);

function gettime()  {
now = new Date();
sec = now.getSeconds();
console.log(sec)
getpx();
 }

function getpx()  {
secp = sec * pxt - pxt;
var context = canvas.getContext('2d');
context.fillStyle = 'rgb(255,00,00)';
if( ( sec % 5 ) == 0 ) {
context.fillStyle = 'rgb(00,00,255)';
}
context.fillRect(pxl,secp,pxl,pxt);

//色の指定
//context.strokeStyle = 'rgb(00,00,255)'; //枠線の色は青
//context.fillStyle = 'rgb(255,00,00)'; //塗りつぶしの色は赤

//delete
context.clearRect(pxl,secp-1, pxl,1);

if (startset == 0) {
for (var i = 0; i <= sec; i++) {

context.fillStyle = 'rgb(255,00,00)';
if( ( i % 5 ) == 0 ) {
context.fillStyle = 'rgb(00,00,255)';
}
context.fillRect(pxl,i * pxt - pxt,pxl,pxt);
context.clearRect(pxl,i * pxt - pxt -1,pxl,1);

}
console.log("@");
startset = 1;
}
//reset
 if (sec == 0) {
 context.clearRect(0,0,pxl*3,wih);
 context.fillStyle = 'rgb(0,0,0)';
 context.fillRect(0,secp,pxl,wih);
 context.fillRect(pxl*2,secp,pxl,wih);

// secp = 0;
 }
}
