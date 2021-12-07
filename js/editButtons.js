var addConnection = document.getElementById("addConnection");
var deleteConnectionAtom = document.getElementById("deleteConnectionAtom");
var changeColorForAll = document.getElementById("changeColorForAll");
var changeColorForOne = document.getElementById("changeColorForOne");
var colorPicker = document.getElementById("colorPicker");
var body = document.getElementsByTagName('body')[0];
var bodyStyle = body.style;
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

changeColorForAll.addEventListener('click', () => {
    if(panelEnabled)
    {
        atomsList.forEach(item => {
            item.DOM.addEventListener('mousedown', getItemStartingPosition);
            item.DOM.addEventListener('mouseup', changeColorForAllHandler);
        });
        bodyStyle.cursor = "crosshair";
        disablePanel(changeColorForAll);
    }
    else
    {
        atomsList.forEach(item => {
            if(item.DOM.classList.contains("pickedElement"))
                item.DOM.classList = "";
                item.DOM.removeEventListener('mousedown', getItemStartingPosition);
                item.DOM.removeEventListener('mouseup', changeColorForAllHandler);
        });
        firstElementPicked = false;
        firstElementPicked = false;
        bodyStyle.cursor = "default";
        enablePanel(changeColorForAll);
    }
}, true);

changeColorForOne.addEventListener('click', () => {
    if(panelEnabled)
    {
        atomsList.forEach(item => {
            item.DOM.addEventListener('mousedown', getItemStartingPosition);
            item.DOM.addEventListener('mouseup', changeColorForOneHandler);
        });
        bodyStyle.cursor = "crosshair";
        disablePanel(changeColorForOne);
    }
    else
    {
        atomsList.forEach(item => {
            if(item.DOM.classList.contains("pickedElement"))
                item.DOM.classList = "";
                item.DOM.removeEventListener('mousedown', getItemStartingPosition);
                item.DOM.removeEventListener('mouseup', changeColorForOneHandler);
        });
        firstElementPicked = false;
        firstElementPicked = false;
        bodyStyle.cursor = "default";
        enablePanel(changeColorForOne);
    }
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

function changeColorForAllHandler(e)
{

}

function changeColorForOneHandler(e)
{
    let thisAtom = e.target;
    let thisAtomObject = getAtomById(thisAtom).atom;

    if(movedFewPixels(pickedAtomStartingPosition, thisAtom))
    {
        thisAtom.style.background = colorPicker.value;
        thisAtomObject.color = colorPicker.value;
    }
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
    changeColorForAll.style.pointerEvents = 'auto';
    changeColorForOne.style.pointerEvents = 'auto';
    clickedButton.style.borderColor = "white";
    panelEnabled = true;
}

function disablePanel(clickedButton)
{
    document.getElementById('menuWrapper').style.pointerEvents = 'none';
    //document.getElementById('sprawdzZadanie').style.pointerEvents = 'none';
    addConnection.style.pointerEvents = 'none';
    deleteConnectionAtom.style.pointerEvents = 'none';
    changeColorForAll.style.pointerEvents = 'none';
    changeColorForOne.style.pointerEvents = 'none';
    clickedButton.style.pointerEvents = 'auto';
    clickedButton.style.borderColor = "black";
    panelEnabled = false;
}

//#endregion