var d = document.getElementById("txt_edad");
var f = document.getElementById("txt_nacimiento");
var e = document.getElementById("button");
e.addEventListener("click", dibujoPorClick);

function dibujoPorClick() {
  var t = parseInt(d.value);
  var s = parseInt(f.value);
  document.write("Tu edad en el 2080 sería " + (2080 - s));
}
