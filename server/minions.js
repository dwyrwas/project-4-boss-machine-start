const { getAllFromDatabase, createMinion, addToDatabase, deleteFromDatabasebyId, updateInstanceInDatabase, getFromDatabaseById } = require('./db'); 


const getMinions = (req, res) => {
    const allMinions = getAllFromDatabase('minions');
    res.send(allMinions);
}

const newMinion = (req, res, next) => {
    const minion = req.params;
    const minionToAdd = createMinion(minion);
    res.status(201).send(addToDatabase('minions', minionToAdd));
}

const getMinionById = (req, res, next) => {
    const minionId = req.params.minionId;
    const foundMinion = getFromDatabaseById('minions', minionId);
    if (foundMinion === null) {
        res.status(404).send('Minion not found.');
    } else {
        res.status(200).send(foundMinion);
    }
}

const updateMinion = (req, res, next) => {
    const minionId = req.params.minionId;
    const minions = getAllFromDatabase('minions');
    const minionToUpdate = minions[minions.findIndex(minionId)];
    updateInstanceInDatabase('minions', req.params);
    res.status(200).send(minions[minions.findIndex(minionId)]);
}

const deleteMinion = (req, res, next) => {
    const minionId = req.params.minionId;
    deleteFromDatabasebyId('minions', minionId);
    res.status(204).send('Minion deleted.');
}

module.exports =  {getMinions, newMinion, getMinionById, updateMinion, deleteMinion}