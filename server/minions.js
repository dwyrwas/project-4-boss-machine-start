const { getAllFromDatabase, createMinion, addToDatabase, deleteFromDatabasebyId, updateInstanceInDatabase, getFromDatabaseById } = require('./db'); 


const getMinions = (req, res) => {
    const allMinions = getAllFromDatabase('minions');
    res.send(allMinions);
}

const newMinion = (req, res, next) => {
    const minionToAdd = req.body;
    minionToAdd.id = '';
    const newMinion = addToDatabase('minions', minionToAdd);
    res.status(201).send(newMinion);
}

const getMinionById = (req, res, next) => {
    const minionId = req.params.minionId;
    const foundMinion = getFromDatabaseById('minions', minionId);
    if (foundMinion !== null) {
        res.status(200).send(foundMinion);
    } else {
        res.status(404).send();
        next();
    }
}

const updateMinion = (req, res, next) => {
    const minionUpdates = req.body;
    const updatedMinion = updateInstanceInDatabase('minions', minionUpdates); 
    res.status(200).send(updatedMinion);
}

const deleteMinion = (req, res, next) => {
    const minionId = req.params.minionId;
    deleteFromDatabasebyId('minions', minionId);
    res.status(204).send('Minion deleted.');
}

module.exports =  {getMinions, newMinion, getMinionById, updateMinion, deleteMinion}