timerID = setInterval('clock()',500); //0.5秒毎にclock()を実行

function clock() {
  document.getElementById("pop").innerHTML = getNow();
}

function getNow() {
  var top = (Math.floor( Math.random() * 61 ) + 20) * 5;
  var left = (Math.floor( Math.random() * 61 ) + 10) * 10;
  var s = "<font color='red'><div style='position:absolute;top:" + top + "px;left:" + left + "px;color = red'>虫</div></font>";
  return s;
}
