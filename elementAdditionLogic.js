function getElementInfo(elementSymbol)
{
    return periodicTable.find(element => {return element.symbol === elementSymbol})
}

function drawElement(elementInfo)
{
    atomsList.push(new Atom(elementInfo.symbol, elementInfo.hexColor, elementInfo.valences[0]))
}

document.getElementById("elementAddition").addEventListener("click", () => drawElement(getElementInfo("C")))
document.getElementById("elementAddition1").addEventListener("click", () => drawElement(getElementInfo("Li")))