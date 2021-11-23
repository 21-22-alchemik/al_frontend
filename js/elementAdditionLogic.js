function getElementInfo(elementSymbol)
{
    return periodicTable.find(element => {return element.symbol === elementSymbol})
}

function drawElement(elementInfo)
{
    atomsList.push(new Atom(elementInfo.symbol, elementInfo.hexColor, elementInfo.valences[0]))
}