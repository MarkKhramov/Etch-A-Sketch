const TOTALPX = 960;
let container = document.getElementById("container");
let clearButton = document.getElementById("clearButton");
let initialSide = 16;

createBoard(initialSide);

function createBoard(num)
{
    
    var sideLength = TOTALPX/num;

    container.setAttribute("style", makeBoardAttributes(num,sideLength));
    
    createBlocks(num,sideLength);
   
    const blockArray = Array.from(container.getElementsByClassName("blck"));
    blockArray.forEach(blck => blck.addEventListener('mouseover', () => blck.setAttribute("class", "blck blocks")));

}

function makeBoardAttributes(num, sideLength)
{
    return "display:grid; grid-template-columns: repeat(" + num +"," + sideLength + "px); grid-template-rows: repeat(" + num + "," + sideLength +"px);";
}

function createBlocks(numPerSide, sideLength)
{
    var block;
    for(let i = 0; i < (numPerSide*numPerSide); i++)
    {
        block = document.createElement("div");
        block.setAttribute("class", "blck");
        block.setAttribute("style", "height:" + sideLength + "px;" + " " + "width:" + sideLength + "px;");
        container.appendChild(block);  
    }
}

function refreshBoard()
{  
    numPerSide = prompt("Please input the number of blocks per side:")
    
    while(container.firstChild)
    {
        container.firstChild.remove();
    }

    createBoard(numPerSide);
}


clearButton.addEventListener("click", refreshBoard);
