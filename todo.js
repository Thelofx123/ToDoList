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
    var input2 = document.createElement('SPAN');
    var edit = document.createElement('SPAN');
    var eText = document.createTextNode("\u270E");
    var testt = document.createTextNode("\u00D7");
    var checkb = document.createTextNode("\u2713");


    input.className = "close";
    input2.className = "che1";
    edit.className = "edit";
    edit.appendChild(eText)
    input.appendChild(testt)
    input2.appendChild(checkb)
    li.appendChild(input)
    li.appendChild(input2)
    li.appendChild(edit)


    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        }
      }

      for (j = 0; j < che.length; j++) {
        che[j].onclick = function() {
          var div = this.parentElement;
          div.classList.toggle('toggle');
        }
      }

      for (var e = 0; e < editC.length; e++) {
       
        editC[e].onclick = function () {
          var p = prompt("Edit your entry");
          entry.innerHTML = p;
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



var che = document.getElementsByClassName("che1");
let j;


var editC = document.getElementsByClassName("edit");
let e;

