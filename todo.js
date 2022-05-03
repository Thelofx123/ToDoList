function add(){
    var li = document.createElement("li");
    var iValue = document.getElementById("myInput").value;
    var t = document.createTextNode(iValue);
    li.appendChild(t);
    if(iValue === ''){
        console.log("Write something")
    }else {
        document.getElementById('myUL').appendChild(li)
    }
    document.getElementById("myInput").value  = "";
    var input = document.createElement('SPAN');
    var testt = document.createTextNode("\u00D7");

    input.className = "close";
    input.appendChild(testt)
    li.appendChild(input)

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        }
      }
}

document.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    add();
  }
});

var close = document.getElementsByClassName("close");
let i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}