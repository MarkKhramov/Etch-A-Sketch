function createBlocks(num)
{
    var container = document.getElementById("container")
    container.style.gridTemplateColumns = num;
    container.style.gridTemplateRows = num;
    
    for(let i = 0; i < num; i++)
    {
        container.appendChild = document.createElement('div').setAttribute("class", "blocks");
    }

    
}
createBlocks(16)