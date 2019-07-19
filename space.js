var menu = "";

for (var i = 0; i < 5; i++) {
var menupp = "<div class = 'menu" + i + "'>メニュー" + i + "</div>"
var menu = menu + menupp;
}

document.getElementById("submenu").innerHTML = menu;

for (var i = 0; i < 5; i++) {
  document.getElementById("submenu").children[i].setAttribute("value","aaa");
}
