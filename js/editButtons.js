var addConnection = document.getElementById("addConnection");
var deleteConnectionAtom = document.getElementById("deleteConnectionAtom");
var changeColor = document.getElementById("changeColor");
var bodyStyle = document.getElementsByTagName('body')[0].style;
var pickedAtomStartingPosition = {};
var panelEnabled = true;
var firstElementPicked = false;
var lastPicked = null;

atomsList.push(new Atom("H", getColorBySymbol("H"), 1, 165, 5));
atomsList.push(new Atom("C", getColorBySymbol("C"), 4, 250, 120));
atomsList.push(new Atom("N", getColorBySymbol("N"), 3, 85, 165));
connection(atomsList[0], atomsList[1]);
connection(atomsList[1], atomsList[2]);
connection(atomsList[1], atomsList[2]);
connection(atomsList[1], atomsList[2]);

//#region COLOR PICKER

var pickedColor = document.getElementById('pickedColor');
var canvasLogicConfirm = document.getElementById('canvasLogicConfirm');
var canvasLogicCancel = document.getElementById('canvasLogicCancel');
var colorPickerBackground = document.getElementById('colorPickerBackground');
var colorCanvasContainer = document.getElementById('colorCanvasContainer');
var colorCanvas = document.getElementById('colorCanvas');

var colorContext = colorCanvas.getContext('2d');
var color = 'rgba(0, 0, 255, 0.5)';
var gradient = colorContext.createLinearGradient(0, 0, 400, 0);
gradient.addColorStop(0, "rgb(255, 0, 0)");
gradient.addColorStop(0.15, "rgb(255, 0, 255)");
gradient.addColorStop(0.33, "rgb(0, 0, 255)");
gradient.addColorStop(0.49, "rgb(0, 255, 255)");
gradient.addColorStop(0.67, "rgb(0, 255, 0)");
gradient.addColorStop(0.84, "rgb(255, 255, 0)");
gradient.addColorStop(1, "rgb(255, 0, 0)");
colorContext.fillStyle = gradient;
colorContext.fillRect(0, 0, 400, 400);

gradient = colorContext.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
gradient.addColorStop(0.18, "rgba(255, 255, 255, 0)");
gradient.addColorStop(0.18, "rgba(0, 0, 0, 0)");
gradient.addColorStop(0.37, "rgba(0, 0, 0, 1)");
colorContext.fillStyle = gradient;
colorContext.fillRect(0, 0, 400, 400);


canvasLogicCancel.addEventListener('click', () => {
    colorPickerBackground.style.visibility = "hidden";
    colorCanvasContainer.style.visibility = "hidden";
}, true);

colorCanvas.addEventListener('mouseover', function(e) {
    pickedColor.style.background = 'black';
}, true);

colorCanvas.addEventListener('mouseleave', () => {
    pickedColor.style.background = 'white';
}, true);

//#endregion

//#region CLICK HANDLING

addConnection.addEventListener('click', () => {
    if(panelEnabled)
    {
        atomsList.forEach(item => {
            item.DOM.addEventListener('mousedown', getItemStartingPosition);
            item.DOM.addEventListener('mouseup', addConnectionHandler);
        });
        bodyStyle.cursor = "cell";
        disablePanel(addConnection);
    }
    else
    {
        atomsList.forEach(item => {
            if(item.DOM.classList.contains("pickedElement"))
                item.DOM.classList = "";
                item.DOM.removeEventListener('mousedown', getItemStartingPosition);
                item.DOM.removeEventListener('mouseup', addConnectionHandler);
        });
        firstElementPicked = false;
        firstElementPicked = false;
        bodyStyle.cursor = "default";
        enablePanel(addConnection);
    }
}, true);

deleteConnectionAtom.addEventListener('click', () => {
    if(panelEnabled)
    {
        atomsList.forEach(item => {
            item.DOM.addEventListener('mousedown', getItemStartingPosition);
            item.DOM.addEventListener('mouseup', deleteAtomHandler);
        });
        connsList.forEach(item => {
            item.DOM.addEventListener('click', deleteConnectionHandler);
        });
        bodyStyle.cursor = "no-drop";
        disablePanel(deleteConnectionAtom);
    }
    else
    {
        atomsList.forEach(item => {
            item.DOM.removeEventListener('mousedown', getItemStartingPosition);
            item.DOM.removeEventListener('mouseup', deleteAtomHandler);
        });
        connsList.forEach(item => {
            item.DOM.removeEventListener('click', deleteConnectionHandler);
        });
        bodyStyle.cursor = "default";
        enablePanel(deleteConnectionAtom);
    }
}, true);

changeColor.addEventListener('click', () => {
    colorPickerBackground.style.visibility = "visible";
    colorCanvasContainer.style.visibility = "visible";
}, true);

//#endregion

//#region HANDLER FUNCTIONS

function getItemStartingPosition(e)
{
    let thisAtom = e.target;
    pickedAtomStartingPosition = {positionTop: thisAtom.offsetTop, positionLeft: thisAtom.offsetLeft};
}

function addConnectionHandler(e) 
{
    let thisAtom = e.target;

    if(movedFewPixels(pickedAtomStartingPosition, thisAtom))
    {
        if (!firstElementPicked) 
        {
            thisAtom.classList = "pickedElement";
            lastPicked = thisAtom;
        }
        else 
        {
            if (thisAtom.classList.contains("pickedElement"))
                thisAtom.classList = "";
            else 
            {
                lastPicked.classList = "";
                connection(getAtomById(lastPicked).atom, getAtomById(thisAtom).atom);
            }
            lastPicked = null;
        }
        firstElementPicked = !firstElementPicked;
    }
}

function deleteAtomHandler(e)
{
    let thisAtom = e.target;

    if(movedFewPixels(pickedAtomStartingPosition, thisAtom))
    {
        let deletedAtom = atomsList.splice(getAtomById(thisAtom).index, 1)[0];
        thisAtom.remove();

        for(i = 0; i < connsList.length; i++)
        {
            if(connsList[i].parent1.atomId == deletedAtom.atomId || connsList[i].parent2.atomId == deletedAtom.atomId)
            {
                connsList[i].DOM.remove();
                connsList.splice(i, 1);
                i--;
                counter.conns--;
            }
        }

        reduceConnectionIndices();
        reduceAtomIndices();
        counter.atoms--;
    }
}

function deleteConnectionHandler(e)
{
    let thisConnection = e.target;
    let connectionToCheck = getConnectionById(thisConnection).connection;

    if(connectionToCheck.count == 1)
    {
        let deletedConnection = connsList.splice(getConnectionById(thisConnection).index, 1)[0];
        deletedConnection.delete();
        thisConnection.remove();
        reduceConnectionIndices();
        counter.conns--;
    }
    else connectionToCheck.changeCount(-1);
}

//#endregion

//#region UTIL

function reduceConnectionIndices()
{
    connsList.forEach(function(item, index) {
        if(item.connectionId != index)
        {
            item.DOM.id = "connection_" + index.toString();
            item.connectionId = index;
        }
    });
}

function reduceAtomIndices()
{
    atomsList.forEach(function(item, index) {
        if(item.atomId != index)
        {
            item.DOM.id = "atom_" + index.toString();
            item.atomId = index;
        }
    });
}

function movedFewPixels(position1, position2)
{
    if(position2.offsetLeft <= position1.positionLeft + 1
        && position2.offsetLeft >= position1.positionLeft - 1
        && position2.offsetTop <= position1.positionTop + 1
        && position2.offsetTop >= position1.positionTop - 1)
        return true;
    else return false;
}

function getAtomById(atom)
{
    let resultAtom;
    let resultIndex;
    atomsList.forEach(function(item, index) {
        if(item.DOM.id == atom.id)
        {
            resultAtom = item;
            resultIndex = index;
        }
    });
    return {atom: resultAtom, index: resultIndex};
}

function getConnectionById(connection)
{
    let resultConnection;
    let resultIndex;
    connsList.forEach(function(item, index) {
        if(item.DOM.id == connection.id)
        {
            resultConnection = item;
            resultIndex = index;
        }
    });
    return {connection: resultConnection, index: resultIndex};
}


function enablePanel(clickedButton)
{
    document.getElementById('menuWrapper').style.pointerEvents = 'auto';
    //document.getElementById('sprawdzZadanie').style.pointerEvents = 'auto';
    addConnection.style.pointerEvents = 'auto';
    deleteConnectionAtom.style.pointerEvents = 'auto';
    changeColor.style.pointerEvents = 'auto';
    clickedButton.style.borderColor = "white";
    panelEnabled = true;
}

function disablePanel(clickedButton)
{
    document.getElementById('menuWrapper').style.pointerEvents = 'none';
    //document.getElementById('sprawdzZadanie').style.pointerEvents = 'none';
    addConnection.style.pointerEvents = 'none';
    deleteConnectionAtom.style.pointerEvents = 'none';
    changeColor.style.pointerEvents = 'none';
    clickedButton.style.pointerEvents = 'auto';
    clickedButton.style.borderColor = "black";
    panelEnabled = false;
}

//#endregion