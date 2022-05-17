let playerTurn = true; //true = circle, false = cross
let sectorId = "";
let shape = "";
let win = false;

let s11 = 0;
let s12 = 0;
let s13 = 0;
let s21 = 0;
let s22 = 0;
let s23 = 0;
let s31 = 0;
let s32 = 0;
let s33 = 0;

function ticTacToe(row, col) {
  sectorId = `section${row}-${col}`;

  if (playerTurn) {
    shape = "url(Images/circle.png)";
  } else {
    shape = "url(Images/cross.png)";
  }

  document.getElementById(sectorId).style.backgroundImage = shape;
  document.getElementById(sectorId).style.visibility = "visible";

  countSection(row, col);

  return (playerTurn = !playerTurn);
}

function countSection(row, col) {
  if (playerTurn) {
    if (row === 1 && col === 1) {
      s11 = 1;
    } else if (row === 1 && col === 2) {
      s12 = 1;
    } else if (row === 1 && col === 3) {
      s13 = 1;
    } else if (row === 2 && col === 1) {
      s21 = 1;
    } else if (row === 2 && col === 2) {
      s22 = 1;
    } else if (row === 2 && col === 3) {
      s23 = 1;
    } else if (row === 3 && col === 1) {
      s31 = 1;
    } else if (row === 3 && col === 2) {
      s32 = 1;
    } else if (row === 3 && col === 3) {
      s33 = 1;
    }
  } else {
    if (row === 1 && col === 1) {
      s11 = 2;
    } else if (row === 1 && col === 2) {
      s12 = 2;
    } else if (row === 1 && col === 3) {
      s13 = 2;
    } else if (row === 2 && col === 1) {
      s21 = 2;
    } else if (row === 2 && col === 2) {
      s22 = 2;
    } else if (row === 2 && col === 3) {
      s23 = 2;
    } else if (row === 3 && col === 1) {
      s31 = 2;
    } else if (row === 3 && col === 2) {
      s32 = 2;
    } else if (row === 3 && col === 3) {
      s33 = 2;
    }
  }
  console.log({ s11, s12, s13, s21, s22, s23, s31, s32, s33 });

  //row 1 complete

  if (s11 === 1 && s12 === 1 && s13 === 1) {
    console.log("Row 1 has been won by circles");
    displayWin("row", 1);
  }
  if (s11 === 2 && s12 === 2 && s13 === 2) {
    console.log("Row 1 has been won by crosses");
    document.getElementById("win").style.backgroundImage =
      "url(Images/row1Win.png)";
    displayWin("row", 1);
  }

  //row 2 complete

  if (s21 === 1 && s22 === 1 && s23 === 1) {
    console.log("Row 2 has been won by circles");
    displayWin("row", 2);
  }
  if (s21 === 2 && s22 === 2 && s23 === 2) {
    console.log("Row 2 has been won by crosses");
    displayWin("row", 2);
  }

  //row 3 complete

  if (s31 === 1 && s32 === 1 && s33 === 1) {
    console.log("Row 3 has been won by circles");
    displayWin("row", 3);
  }
  if (s31 === 2 && s32 === 2 && s33 === 2) {
    console.log("Row 3 has been won by crosses");
    displayWin("row", 3);
  }

  //col 1 complete

  if (s11 === 1 && s21 === 1 && s31 === 1) {
    console.log("Col 1 has been won by circles");
    displayWin("col", 1);
  }
  if (s11 === 2 && s21 === 2 && s31 === 2) {
    console.log("Col 1 has been won by crosses");
    displayWin("col", 1);
  }

  //col 2 complete

  if (s12 === 1 && s22 === 1 && s32 === 1) {
    console.log("Col 2 has been won by circles");
    displayWin("col", 2);
  }
  if (s12 === 2 && s22 === 2 && s32 === 2) {
    console.log("Col 2 has been won by crosses");
    displayWin("col", 2);
  }

  //col 3 complete

  if (s13 === 1 && s23 === 1 && s33 === 1) {
    console.log("Col 3 has been won by circles");
    displayWin("col", 3);
  }
  if (s13 === 2 && s23 === 2 && s33 === 2) {
    console.log("Col 3 has been won by crosses");
    displayWin("col", 3);
  }

  //diagonal 1 complete

  if (s11 === 1 && s22 === 1 && s33 === 1) {
    console.log("Diagonal 1 has been won by circles");
    displayWin("diag", 1);
  }
  if (s11 === 2 && s22 === 2 && s33 === 2) {
    console.log("Diagonol 1 has been won by crosses");
    displayWin("diag", 1);
  }

  //diagonal 2 complete

  if (s13 === 1 && s22 === 1 && s31 === 1) {
    console.log("Diagonol 2 has been won by circles");
    displayWin("diag", 2);
  }
  if (s13 === 2 && s22 === 2 && s31 === 2) {
    console.log("Diagonol 2 has been won by crosses");
    displayWin("diag", 2);
  }

  //no one wins

  if (
    s11 > 0 &&
    s12 > 0 &&
    s13 > 0 &&
    s21 > 0 &&
    s22 > 0 &&
    s23 > 0 &&
    s31 > 0 &&
    s32 > 0 &&
    s33 > 0
  ) {
    winMessage("you suck!");
  }
}

function displayWin(orient, num) {
  win = true;

  document.getElementById(
    "win"
  ).style.backgroundImage = `url(Images/${orient}${num}Win.png)`;

  setTimeout(() => {
    document.getElementById("win").style.visibility = "visible";

    setTimeout(() => {
      document.getElementById("win").style.visibility = "hidden";

      setTimeout(() => {
        document.getElementById("win").style.visibility = "visible";
      }, 400);
    }, 400);
  }, 400);

  if (playerTurn) {
    setTimeout(() => {
      document.getElementById("winText").innerText = "Circles Win!";
      document.getElementById("winMessage").style.visibility = "visible";
    }, 2500);
  } else {
    setTimeout(() => {
      document.getElementById("winText").innerHTML = "Crosses Win!";
      document.getElementById("winMessage").style.visibility = "visible";
    }, 2500);
  }
}

function winMessage(outcome) {
  if (outcome === "cirlces win") {
    setTimeout(() => {
      document.getElementById("winText").innerHTML = "Circles Win!";
      document.getElementById("winMessage").style.visibility = "visible";
    }, 2000);
  } else if (outcome === "crosses win") {
    setTimeout(() => {
      document.getElementById("winText").innerHTML = "Crosses Win!";
      document.getElementById("winMessage").style.visibility = "visible";
    }, 2000);
  } else if (outcome === "you suck!" && win === false) {
    //document.getElementsByClassName("clickedSection").array.forEach(clickSection => {

    // clickSection.style.visibility = "hidden";
    // });

    setTimeout(() => {
      document.getElementById("winText").innerHTML = "You Suck!";
      document.getElementById("winMessage").style.visibility = "visible";
    }, 2500);
  }
}

function pushInButton() {
  changeButton();

  win = false;

  document.getElementById("section1-1").style.visibility = "hidden";
  document.getElementById("section1-2").style.visibility = "hidden";
  document.getElementById("section1-3").style.visibility = "hidden";
  document.getElementById("section2-1").style.visibility = "hidden";
  document.getElementById("section2-2").style.visibility = "hidden";
  document.getElementById("section2-3").style.visibility = "hidden";
  document.getElementById("section3-1").style.visibility = "hidden";
  document.getElementById("section3-2").style.visibility = "hidden";
  document.getElementById("section3-3").style.visibility = "hidden";

  document.getElementById("win").style.visibility = "hidden";
  document.getElementById("winMessage").style.visibility = "hidden";

  s11 = 0;
  s12 = 0;
  s13 = 0;
  s21 = 0;
  s22 = 0;
  s23 = 0;
  s31 = 0;
  s32 = 0;
  s33 = 0;

  return (playerTurn = true);
}

function changeButton() {
  document.getElementById("square2").style.visibility = "visible";

  setTimeout(() => {
    document.getElementById("square2").style.visibility = "hidden";
  }, 200);
}
