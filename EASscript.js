const TOTALPX = 960;
var container = document.getElementById("container");


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
createBoard(100)