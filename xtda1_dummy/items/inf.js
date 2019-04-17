
timerID = setInterval('draw()',100)
function draw() {

var canvas = document.getElementById('canvassample');
if ( ! canvas || ! canvas.getContext ) { return false; }
var ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.strokeRect(20, 20, 480, 480);
ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineTo(500,500);
//ctx.closePath();
ctx.stroke();
}
