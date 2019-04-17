window.addEventListener("keydown", handleKeydown);
aaa = 20
bbb = aaa + 40
timerID = setInterval('draw()',100)
function draw() {

  var canvas = document.getElementById('canvassample');
if ( ! canvas || ! canvas.getContext ) { return false; }
var ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.strokeRect(aaa, 20, bbb, 80);
}

window.addEventListener("keydown", handleKeydown);

function handleKeydown(event){
  // キーコード(どのキーが押されたか)を取得
  var keyCode = event.keyCode;

  // 右
   if (keyCode == 39) {
  aaa += 10
  }

  // 左
   if (keyCode == 37) {
  aaa -= 10
  }

  // 上
   if (keyCode == 38) {
  up();
  }


  // 下
   if (keyCode == 40) {
  down();
  }

}
