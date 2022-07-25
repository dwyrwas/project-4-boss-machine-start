import { getAllFromDatabase, createMinion, addToDatabase, deleteFromDatabasebyId, updateInstanceInDatabase } from "./db";


const getMinions = (req, res, next) => {
    const allMinions = getAllFromDatabase('minions');
    res.send(allMinions);
}

const newMinion = (req, res, next) => {
    const minion = req.params;
    const minionToAdd = createMinion(minion);
    addToDatabase('minion', minionToAdd);
    res.status(201);
}

const getMinionById = (req, res, next) => {
    const minionId = req.params.id;
    const foundMinion = getFromDatabaseById('minions', minionId);
    if (foundMinion === null) {
        res.status(404).send('Minion not found.');
    } else {
        res.send(foundMinion);
    }
}

const updateMinion = (req, res, next) => {
    const minionId = req.params.id;
    const minions = getAllFromDatabase('minions');
    const minionToUpdate = minions[minions.findIndex(minionId)];
    updateInstanceInDatabase('minions', minionToUpdate);
    res.status(200).send('Minion updated.');
}

const deleteMinion = (req, res, next) => {
    const minionId = req.paras.id;
    deleteFromDatabasebyId('minions', minionId);
    res.status(204).send('Minion deleted.');
}

export default {getMinions, newMinion, getMinionById, updateMinion, deleteMinion}