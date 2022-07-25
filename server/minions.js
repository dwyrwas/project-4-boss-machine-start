import { getAllFromDatabase, createMinion, addToDatabase, deleteFromDatabasebyId, updateInstanceInDatabase } from "./db";

const getMinions = (req, res, next) => {
    const allMinions = getAllFromDatabase('minions');
    res.JSON(allMinions);
    next();
}

const newMinion = (req, res, next) => {
    const minion = req.params;
    const minionToAdd = createMinion(minion);
    addToDatabase('minion', minionToAdd);
    res.status(201);
    next();
}

const getMinionById = (req, res, next) => {
    const minionId = req.params.id;
    const foundMinion = 
    res.JSON(foundMinion)
    next();
}

const updateMinion = (req, res, next) => {
    const minionId = req.params.id;
    const minions = getAllFromDatabase('minions');
    const minionToUpdate = minions[minions.findIndex(minionId)];
    updateInstanceInDatabase('minions', minionToUpdate);
    res.status(200).send('Minion updated.');
    next();
}

const deleteMinion = (req, res, next) => {
    const minionId = req.paras.id;
    deleteFromDatabasebyId('minions', minionId);
    res.status(204).send('Minion deleted.');
    next();
}

export default {getMinions, newMinion, getMinionById, updateMinion, deleteMinion}