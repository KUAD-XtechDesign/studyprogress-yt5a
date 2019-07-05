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

context.fillRect(0,secp,pxl,pxt);
//context.fillRect(pxl,pxl,pxl,pxl);

//色の指定
//context.strokeStyle = 'rgb(00,00,255)'; //枠線の色は青
//context.fillStyle = 'rgb(255,00,00)'; //塗りつぶしの色は赤

//delete
context.clearRect(0,secp-1, pxl,1);

if (startset == 0) {
for (var i = 0; i <= sec; i++) {
context.fillRect(0,i * pxt - pxt,pxl,pxt);
context.clearRect(0,i * pxt - pxt -1, pxl,1);

}
console.log("@");
startset = 1;
}
//reset
 if (sec == 0) {
 context.clearRect(0,0,pxl*3,wih);
// secp = 0;
 }
}
