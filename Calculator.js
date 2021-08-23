// @ts-nocheck
var input = document.querySelector(".input");
var iteams = document.querySelectorAll(".iteam");
for (var iteam of iteams) {
  iteam.onclick = function (e) {
    var node = e.target.innerHTML;

    if (node == "AC") input.innerHTML = "";
    else if (node == "DEL") {
      var ArrText = Array.from(input.innerHTML);
      ArrText.pop();
      if (ArrText.length != 0) input.innerHTML = ArrText.join("");
      else if (ArrText.length == 0) {
        input.innerHTML = "";
      }
    } else if (node == "=") {
      input.innerHTML = eval(input.innerHTML);
    } else {
      input.innerHTML += node;
    }
  };
}
var a= 'Math.acos(-1)'
console.log(eval(a))