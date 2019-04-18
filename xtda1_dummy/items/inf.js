
timerID = setInterval('room()',100)


function room() {

 var canvas = document.getElementById('canvas');
 if ( ! canvas || ! canvas.getContext ) { return false; }

//canvas width
 if (document.body.clientWidth < document.documentElement.clientHeight) {
   document.getElementById('canvas').width = document.body.clientWidth
   document.getElementById('canvas').height = document.body.clientWidth
 }else{
  document.getElementById('canvas').width = document.documentElement.clientHeight
  document.getElementById('canvas').height = 	document.documentElement.clientHeight
 }

 canvaswidth = document.getElementById('canvas').width
 var ctx = canvas.getContext('2d');


 //room other line
 ctx.beginPath();
 ctx.strokeRect(0, 0, canvaswidth, canvaswidth);
 ctx.shadowColor="black";
 ctx.shadowBlur=5;
 ctx.fill();


 //roomline
 roompx = canvaswidth/5;

 linestep = {
  x : [0,roompx,roompx,0],
  y : [0,roompx,roompx*4,canvaswidth]
  }

 rl = 1;
 for (var ii = 0; ii < linestep.x.length-1; ii++) {
  for (var i = 0; i < 2; i++) {

  rl = rl * -1;

  ctx.beginPath();
  ctx.moveTo(canvaswidth/2 + (canvaswidth/2 * rl) - linestep.x[0 + ii] * rl ,linestep.y[0 + ii]);
  ctx.lineTo(canvaswidth/2 + (canvaswidth/2 * rl) - linestep.x[1 + ii] * rl ,linestep.y[1 + ii]);
  ctx.stroke();
  }
 }

 ctx.beginPath();
 ctx.moveTo(roompx,roompx);
 ctx.lineTo(roompx*4,roompx);
 ctx.stroke();

 ctx.beginPath();
 ctx.moveTo(roompx,roompx*4);
 ctx.lineTo(roompx*4,roompx*4);
 ctx.stroke();
//

//objct
objectdate = [[2,5,1,2],[3,2,1,1]];

for (var i = 0; i < objectdate.length; i++) {
 redate = objectdate[i]
 date = {
 x : redate[0],
 y : redate[1],
 w : redate[2],
 h : redate[3]
 }

 roompxp = (canvaswidth - canvaswidth*2/5)/5;
 ox = roompx;
 ctx.beginPath();
 ctx.strokeRect(roompx + roompxp * date.x,roompx + roompxp * date.y,roompxp * date.w,roompxp * -date.h);
 }

roomwallheight =  (canvaswidth - (canvaswidth - canvaswidth*2/5));

 ctx.beginPath();
 ctx.moveTo(roompx/2,roomwallheight/4)
 ctx.lineTo(roompx/2,roomwallheight/4 + roomwallheight/5*2);
 ctx.moveTo(roompx/2,roomwallheight/4 + roomwallheight/5*2);
 ctx.lineTo(roompx,roompx + roompxp);
 ctx.stroke();

}
