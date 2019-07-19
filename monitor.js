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

    img = new Image();
    img.src = "picture/space1.jpg";

	function loop(){
    /* 画像を描画 */
    context.drawImage(img, 0, 0, canvas.width,canvas.height);
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
