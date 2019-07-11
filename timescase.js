wih = window.innerHeight;
wiw = window.innerWidth;
pxl = wih/20;
pxt = wih/59;

document.getElementById("timescase").innerHTML = "<canvas id='canvas1'" +
"style='position:fixed;right:0;top:0;z-index:30;;'" +
"height='" + wih + "'" +
"Width='" + pxl + "'" +
"></canvas>";

var canvas = document.getElementById('canvas1');
var context = canvas.getContext('2d');

//setup
secp = 0;
startset = 0;

//settime
timerID = setInterval('gettime()',200);

function gettime()  {
 now = new Date();
 sec = now.getSeconds();
 //console.log(sec)
 getpx();
}

function getpx()  {
 secp = sec * pxt - pxt;
 var context = canvas.getContext('2d');
 context.fillStyle = '#5f9ea0';
//５の倍数の時に色を変更。
 if( ( sec % 5 ) == 0 ) {
  context.fillStyle = '#00ced1';
  timeset()
 }
 context.fillRect(0,secp,pxl,pxt);

//色の指定
//context.strokeStyle = 'rgb(00,00,255)'; //枠線の色は青
//context.fillStyle = 'rgb(255,00,00)'; //塗りつぶしの色は赤

//delete
 context.clearRect(0,secp-1, pxl,1);

//一回のみ
 if (startset == 0) {
   timeset()
   startset = 1;
  }

  function timeset(){
  for (var i = 0; i <= sec; i++) {

   context.fillStyle = '#5f9ea0';
   if( ( i % 5 ) == 0 ) {
    context.fillStyle = '#00ced1';
   }

   context.fillRect(0,i * pxt - pxt,pxl,pxt);
   context.clearRect(0,i * pxt - pxt -1,pxl,1);
  }
}
//reset
 if (sec == 0) {
  context.clearRect(0,0,pxl*3,wih);
 }

}
