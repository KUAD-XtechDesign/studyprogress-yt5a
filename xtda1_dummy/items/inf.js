
if ( ! canvas || ! canvas.getContext ) { return false; }
ctx.strokeRect(20, 20, 480, 480);
ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineTo(500,500);
timerID = setInterval('room()',100)


function room() {

 var canvas = document.getElementById('canvassample');
 if ( ! canvas || ! canvas.getContext ) { return false; }


 if (document.body.clientWidth < document.documentElement.clientHeight) {
   document.getElementById('canvassample').width = document.body.clientWidth
   document.getElementById('canvassample').height = document.body.clientWidth
 }else{
  document.getElementById('canvassample').width = document.documentElement.clientHeight
  document.getElementById('canvassample').height = 	document.documentElement.clientHeight
 }

 canvaswidth = document.getElementById('canvassample').width

 var ctx = canvas.getContext('2d');
 ctx.beginPath();
 ctx.strokeRect(0, 0, canvaswidth, canvaswidth);

 rl = 1;

 linestep = {
  x : [0,canvaswidth/5,canvaswidth/5,0],
  y : [0,canvaswidth/5,canvaswidth*4/5,canvaswidth]
  }

 for (var ii = 0; ii < linestep.x.length-1; ii++) {
  for (var i = 0; i < 2; i++) {

  rl = rl * -1;

  ctx.beginPath();
  ctx.moveTo(canvaswidth/2 + (canvaswidth/2 * rl) - linestep.x[0 + ii] * rl,linestep.y[0 + ii]);
  ctx.lineTo(canvaswidth/2 + (canvaswidth/2 * rl) - linestep.x[1 + ii] * rl,linestep.y[1 + ii]);
  ctx.stroke();
  }
 }

 ctx.beginPath();
 ctx.moveTo(canvaswidth/5,canvaswidth/5);
 ctx.lineTo(canvaswidth*4/5,canvaswidth/5);
 ctx.stroke();

 ctx.beginPath();
 ctx.moveTo(canvaswidth/5,canvaswidth*4/5);
 ctx.lineTo(canvaswidth*4/5,canvaswidth*4/5);
 ctx.stroke();
}
