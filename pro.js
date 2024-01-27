let title = document.getElementById('pro-title');
let desc = document.getElementById('pro-desc');
let proDiv = document.getElementById('pro-div');
let numbe = 0;

function test() {
  if (numbe % 2 === 0) {
    title.style.color = "black";
    desc.style.color = "black";
    proDiv.style.background = "white";
    ++numbe
  }
  else {
    title.style.color = "white";
    desc.style.color = "white";
    proDiv.style.background = "black";
    ++numbe
  }
}

proDiv.addEventListener('click', test);
                      