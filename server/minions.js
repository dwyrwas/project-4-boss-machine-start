import { getAllFromDatabase, createMinion, addToDatabase } from "./db";

const getMinions = (req, res) => {
    const allMinions = getAllFromDatabase('minions');
    res.JSON(allMinions);
}

const newMinion = (req, res, next) => {
    const minion = req.params;
    const minionToAdd = createMinion(minion);
    addToDatabase('minion', minionToAdd);
}

const getMinionById = (req, res, next) => {

}

const updateMinion = (req, res, next) => {

}

const deleteMinion = (req, res, next) => {

}

export default {getMinions, newMinion, getMinionById, updateMinion, deleteMinion}