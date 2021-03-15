const grid = document.querySelector("#grid")

const SIZE = 16

window.onload = function() {
    grid.style.gridTemplateColumns = 'repeat(' + String(SIZE) + ', 1fr)'

    for(let i = 0; i < SIZE*SIZE; i++)
    {
        let d = document.createElement("div")
        d.classList = "grid-block"
        d.style = "background-color: white;"
        d.addEventListener("mouseover", changeColour);
        grid.appendChild(d)
    }
}

function changeColour(e)
{   
    let r = Math.random() * 255
    let g = Math.random() * 255
    let b = Math.random() * 255
    e.target.style.background = "rgb(" + String(r) + "," + String(g) + "," + String(b) + ")"
}

function changeSize()
{
    let newSize = prompt("Enter")
}