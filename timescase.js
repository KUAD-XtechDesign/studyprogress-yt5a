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
secp = 0;

timerID = setInterval('gettime()',100);

function gettime()  {
now = new Date();
sec = now.getSeconds();
console.log(sec)
getpx();
 }

function getpx()  {
secp = sec * pxt;
var context = canvas.getContext('2d');

//左から20上から40の位置に、幅50高さ100の四角形を描く
context.fillRect(0,secp,pxl,pxl);
context.fillRect(pxl,pxl,pxl,pxl);

//色を指定する
//context.strokeStyle = 'rgb(00,00,255)'; //枠線の色は青
//context.fillStyle = 'rgb(255,00,00)'; //塗りつぶしの色は赤

//delete
context.clearRect(0,secp-1, pxl,1);

//reset
 if (sec == 0) {
 context.clearRect(0,0,pxl*3,wih);
 secp = 0;
 }
}
