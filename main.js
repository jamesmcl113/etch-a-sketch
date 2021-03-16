const grid = document.querySelector("#grid")

let size = 16

window.onload = function() {
    grid.style.gridTemplateColumns = 'repeat(' + String(size) + ', 1fr)'

    for(let i = 0; i < size*size; i++)
    {
        let d = document.createElement("div")
        d.classList = "grid-block"
        d.style = "background-color: white;"
        d.addEventListener("mouseover", changeColour)
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
    let newSize = prompt("Enter new size (10 - 100)", "20")
    newSize = parseInt(newSize)

    if(!isNaN(newSize))
    {
        if(newSize >= 10 && newSize <= 100) {
            grid.innerHTML = '';
            
            grid.style.gridTemplateColumns = 'repeat(' + String(newSize) + ', 1fr)'
            for(let i = 0; i < newSize*newSize; i++)
            {
                let d = document.createElement("div")
                d.classList = "grid-block"
                d.style = "background-color: white;"
                d.addEventListener("mouseover", changeColour)
                grid.appendChild(d)
            }
            size = newSize
        }
    }
}

function clearGrid()
{
    for(e of grid.children)
    {
        e.style.background = "white"
    }
}