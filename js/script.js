//ELEMENTS
const mayak = document.getElementById("mayak");
const vesti = document.getElementById("vesti");
const unost = document.getElementById("unost");
const mayakControls = document.getElementById("mayakControls");
const vestiControls = document.getElementById("vestiControls");
const unostControls = document.getElementById("unostControls");
const mayakPlay = document.getElementById("mayakPlay");
const vestiPlay = document.getElementById("vestiPlay");
const unostPlay = document.getElementById("unostPlay");
const mayakStop = document.getElementById("mayakStop");
const vestiStop = document.getElementById("vestiStop");
const unostStop = document.getElementById("unostStop");
const mayakRadioOne = document.getElementById("radio-one");
const vestiRadioTwo = document.getElementById("radio-two");
const unostRadioTree = document.getElementById("radio-tree");

//Buttons chenge
function playMyak() {
  mayakPlay.style.display = "none";
  mayakStop.style.display = "block";
}

function playVesti() {
  vestiPlay.style.display = "none";
  vestiStop.style.display = "block";
}

function playUnost() {
  unostPlay.style.display = "none";
  unostStop.style.display = "block";
}

function stopMyak() {
  mayakStop.style.display = "none";
  mayakPlay.style.display = "block";
}

function stopVesti() {
  vestiStop.style.display = "none";
  vestiPlay.style.display = "block";
}

function stopUnost() {
  unostStop.style.display = "none";
  unostPlay.style.display = "block";
}

//STATIONS

mayakPlay.addEventListener("click", () => {
  mayakRadioOne.play();
  if (mayakRadioOne.play()) {
    playMyak();
    vestiRadioTwo.pause();
    unostRadioTree.pause();
    stopVesti();
    stopUnost();
  }
});

mayakStop.addEventListener("click", () => {
  mayakRadioOne.pause();
  stopMyak();
});

vestiPlay.addEventListener("click", () => {
  vestiRadioTwo.play();
  if (vestiRadioTwo.play()) {
    playVesti();
    mayakRadioOne.pause();
    unostRadioTree.pause();
    stopMyak();
    stopUnost();
  }
});
vestiStop.addEventListener("click", () => {
  vestiRadioTwo.pause();
  stopVesti();
});

unostPlay.addEventListener("click", () => {
  unostRadioTree.play();
  if (unostRadioTree.play()) {
    playUnost();
    mayakRadioOne.pause();
    vestiRadioTwo.pause();
    stopVesti();
    stopMyak();
  }
});

unostStop.addEventListener("click", () => {
  unostRadioTree.pause();
  stopUnost();
});
