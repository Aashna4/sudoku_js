// input and solution
var numberSelected = null;
var tileSelected = null;


var board = [
  "--74916-5",
  "2---6-3-9",
  "-----7-1-",
  "-586----4",
  "--3----9-",
  "--62--187",
  "9-4-7---2",
  "67-83----",
  "81--45---",
];

var solution = [
  "387491625",
  "241568379",
  "569327418",
  "758619234",
  "123784596",
  "496253187",
  "934176852",
  "675832941",
  "812945763",
];

window.onload = function () {
  setGame();
};

function setGame() {
  // Digits 1-9
  for (let i = 1; i < 10; i++) {
    //<div id=1 class="number"></div>
    let n = document.createElement("div");
    n.id = i;
    n.innerText = i;
    n.addEventListener("click", SelectNumber);
    n.classList.add("number");
    document.getElementById("digits").appendChild(n);
  }

  // Sudoku input template
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let n = document.createElement("div");
      n.classList.add("tile");
      n.id = i.toString() + "-" + j.toString();
      var ele = board[i].charAt(j);
      if ("-" != ele) {
        n.innerText = ele;
        n.style.fontWeight = "bold";
      }

      if (j == 2 || j == 5 || j == 8) n.style.borderRightColor = "black";
      if (j == 0) n.style.borderLeftColor = "black";
      if (i == 0) n.style.borderTopColor = "black";
      if (i == 2 || i == 5 || i == 8) n.style.borderBottomColor = "black";

      n.addEventListener("click", SelectTile);
      document.getElementById("board").appendChild(n);
    }
  }
}

function SelectNumber() {
  if (numberSelected != null) {
    numberSelected.style.backgroundColor = "white";
  }
  numberSelected = this;
  numberSelected.style.backgroundColor = "gray";
}

function SelectTile() {
    if(this.innerText!="") {
        return;
    }

    let coordinates = this.id.split("-");
    let r = parseInt(coordinates[0]);
    let c = parseInt(coordinates[1]);

    if(numberSelected.id != solution[r][c]){
        let err = parseInt(document.getElementById("errors").innerText);
        err+=1;
        document.getElementById("errors").innerText = err;
    }
    else {
        tileSelected = this;
        tileSelected.innerText = numberSelected.id;
        tileSelected.style.color = "blue";
    }
}
