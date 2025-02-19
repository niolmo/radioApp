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
const mayGlow = document.getElementById("mayakGlowing");

//Buttons chenge
function playMyak() {
  mayakPlay.style.display = "none";
  mayakStop.style.display = "block";
  mayak.classList.add("glowing");
}

function playVesti() {
  vestiPlay.style.display = "none";
  vestiStop.style.display = "block";
  vesti.classList.add("glowing");
}

function playUnost() {
  unostPlay.style.display = "none";
  unostStop.style.display = "block";
  unost.classList.add("glowing");
}

function stopMyak() {
  mayakStop.style.display = "none";
  mayakPlay.style.display = "block";
  mayak.classList.remove("glowing");
}

function stopVesti() {
  vestiStop.style.display = "none";
  vestiPlay.style.display = "block";
  vesti.classList.remove("glowing");
}

function stopUnost() {
  unostStop.style.display = "none";
  unostPlay.style.display = "block";
  unost.classList.remove("glowing");
}

//STATIONS

mayakPlay.addEventListener("click", () => {
  mayakRadioOne.src = "http://icecast.vgtrk.cdnvideo.ru/mayakfm";
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
  vestiRadioTwo.src = "http://icecast.vgtrk.cdnvideo.ru/vestifm";
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
  unostRadioTree.src = "http://icecast.vgtrk.cdnvideo.ru/unost";
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
