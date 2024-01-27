const blob1 = document.getElementById("blob1");
const blob2 = document.getElementById("blob2");
const auto = document.getElementById("continuous");
const multiplierElement = document.getElementById("multiplier");
const addElement = document.getElementById("add-one");
const minusElement = document.getElementById("minus-one");
const applyForm = document.getElementById("apply");
const userNumb = document.getElementById("numb");

let multiplier = 1;
let debounce = true;
let numb = 0;

function changeColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const color = `rgb(${r}, ${g}, ${b})`;
  blob1.style.fill = color;
  blob2.style.fill = color;
}

function changeColorAuto() {
  if (debounce) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const color = `rgb(${r}, ${g}, ${b})`;
    blob1.style.fill = color;
    blob2.style.fill = color;
    setTimeout(changeColorAuto, 1000 / multiplier);
  }
}

blob1.addEventListener("click", changeColor);
blob2.addEventListener("click", changeColor);

auto.addEventListener("click", () => {
  auto.textContent = "Auto: " + (auto.textContent === "Auto: On" ? "Off" : "On");
  
  if (numb % 2 == 0) {
    debounce = true;
    changeColorAuto();
    ++numb
  }
  else {
    debounce = false;
    ++numb
  }
})

addElement.addEventListener("click", () => {
  ++multiplier
  multiplierElement.textContent = `x${multiplier}`;
})

minusElement.addEventListener("click", () => {
  if (multiplier > 1) {
    --multiplier
    multiplierElement.textContent = `x${multiplier}`;
  }
})

applyForm.addEventListener("submit", e => {
  e.preventDefault();
  const applyNumb = +userNumb.value;
  multiplier = applyNumb;
  multiplierElement.textContent = `x${applyNumb}`;
} );