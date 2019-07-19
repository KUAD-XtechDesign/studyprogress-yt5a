rotateon = 0;
cheight = window.innerHeight/10*8;
cwidth = window.innerWidth/10*8;

document.getElementById("mainmonitor").innerHTML = "<canvas id='canvass'" +
"style='z-index:10;'" +
"height='" + cheight + "px'" +
"Width='" + cwidth + "px'" +
"></canvas>";


window.addEventListener('load', draw, false);

function draw(){
    var canvas = document.getElementById('canvass');
    var context = canvas.getContext('2d');
    var degree = 0; //角度
    var radian; //ラジアン
    bou = 0;ef = 1;

    color = "rgba(255,255,0,0.2)";
    img = new Image();
    img.src = "picture/space1.jpg";
    var center = {
      x:-100,//　回転の中心x座標
      y:0//　回転の中心y座標
    };
    objr = [];//オブジェクトの数とそれぞれの半径
    //ex


    at = [canvas.height/2,canvas.height,canvas.height*2];
    for (var ii = 0; ii < 3; ii++) {
     for (var i = 0; i < 6; i++) {
     objr.push(at[ii]);
     }
    }
    var gap = 72;//それぞれの回転のズレの大きさ

    //spinlimit = 90;//回転制限

	function loop(){
    //spinlimit = spinlimit - 1;回転制限
		context.clearRect(0,0, canvas.width,canvas.height);
    /* 画像を描画 */
    context.drawImage(img, 0, 0, canvas.width,canvas.height);

    //if (spinlimit >= 0) {
		degree += 2;//回転速度
    //}

    bou += 2 * ef;
    if (bou > canvas.height/3||bou < 0) {
    ef *= -1;
    }

    for (var i = 0; i < objr.length; i++) {
		radian = (degree + i * gap)* Math.PI/180; //度をラジアンに変換

    x = (objr[i] - bou) * Math.cos(radian) + center.x;
		y = (objr[i] - bou) * Math.sin(radian) + center.y;

		context.beginPath();
		context.fillStyle = color;//色の設定

    //図形の形、座標
    //context.fillRect(x,y,50,50);
    if (rotateon == 1) {
		context.arc(x,y,30,0,Math.PI*2);
    }

		context.fill();

		context.closePath();
}
		requestAnimationFrame(loop);
	}
  loop()
 }

function aaa(){
color = "rgba(255,255,0,0.2)";
img = new Image();
img.src = "picture/space1.jpg";
pushtwo(0)
}

function bbb(){
color = "rgba(100,255,255,0.2)";
img = new Image();
img.src = "picture/space2.jpg";
pushtwo(1)
}

function ccc(){
color = "rgba(255,0,255,0.2)";
img = new Image();
img.src = "picture/space3.jpg";
pushtwo(2)
}
