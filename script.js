
    let wCount = 4;
    let hCount = 4;
    let bHeight = 100;
    let bWidth = 100;
    let mainDiv = document.getElementById('main')
    for (let i = 0; i < wCount * hCount; i++) {
        let a = createBox(bHeight, bWidth);
        mainDiv.appendChild(a);
        a.onmouseout = function () {
            a.style.background = setRandomColor(this);
        }
    }

    document.body.appendChild(mainDiv);


document.querySelector(".ref").onclick = function () {
    location.reload();
}

function createBox(h, w) {
    let div = document.createElement("div");
    div.style.height = h + "px";
    div.style.width = w + "px";
    div.style.border = "1px solid black";
    div.style.boxSizing = "border-box";
    div.style.background = "white";
    div.innerHTML = "<img src='n10.png'>";

    return div;
}

function setRandomColor(a) {
    console.log(a);
    return a.style.visibility = "hidden";
}
