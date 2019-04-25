
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
 roomw5 = canvaswidth/5;
 rooms5 = (canvaswidth - canvaswidth/5*2);
 roomm5 = (canvaswidth + rooms5)/2;

 linestep = {
  x : [0,roomw5,roomw5,0],
  y : [0,roomw5,roomw5*4,canvaswidth]
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
 ctx.moveTo(roomw5,roomw5);
 ctx.lineTo(roomw5*4,roomw5);
 ctx.stroke();

 ctx.beginPath();
 ctx.moveTo(roomw5,roomw5*4);
 ctx.lineTo(roomw5*4,roomw5*4);
 ctx.stroke();
//

//objct
objectdate = [[2,3,1,2],[3,2,1,1]];

for (var i = 0; i < objectdate.length; i++) {
 redate = objectdate[i]
 date = {
 x : redate[0],
 y : redate[1],
 w : redate[2],
 h : redate[3]
 }

 ctx.beginPath();
 ctx.strokeRect(roomw5 + rooms5/5 * date.x,roomw5 + rooms5/5 * (date.y),rooms5/5 * date.w,rooms5/5 * date.h);
 }

 roomwallheight =  (canvaswidth - (canvaswidth - canvaswidth*2/5));

 if (date.x = 3) {
 ctx.beginPath();
 ctx.moveTo(0,roomw5*date.y)
 ctx.lineTo(0,roomw5*date.h);
 ctx.moveTo(0,roomw5);
 ctx.lineTo(roomw5/2,roomwallheight/4 + roomwallheight/5*2);
 ctx.stroke();
 }

 if (!date) {
 ctx.beginPath();
 ctx.moveTo(roomw5/2,roomwallheight/4)
 ctx.lineTo(roomw5/2,roomwallheight/4 + roomwallheight/5*2);
 ctx.moveTo(roomw5/2,roomwallheight/4 + roomwallheight/5*2);
 ctx.lineTo(roomw5,roomw5 + rooms5/5);
 ctx.stroke();

 ctx.beginPath();
 ctx.moveTo(0,0)
 ctx.lineTo(0,roomw5);
 ctx.moveTo(0,roomw5);
 ctx.lineTo(roomw5/2,roomwallheight/4 + roomwallheight/5*2);
 ctx.stroke();

 ctx.beginPath();
 ctx.moveTo(roomw5/2,roomwallheight/4 + roomwallheight/5*2)
 ctx.lineTo(roomw5/2,roomwallheight/4 + roomwallheight/5*4);
 ctx.moveTo(roomw5/2,roomwallheight/4 + roomwallheight/5*4);
 ctx.lineTo(roomw5,roomw5 + rooms5/5*2);
 ctx.stroke();
 }
}
