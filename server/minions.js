import { getAllFromDatabase, createMinion, addToDatabase } from "./db";

const getMinions = (req, res) => {
    getAllFromDatabase('minions');
}

const newMinion = (req, res, next) => {
    const minionToAdd = createMinion({});
    addToDatabase('minion', minionToAdd);
}

const getMinionById = (req, res, next) => {

}

const updateMinion = (req, res, next) => {

}

const deleteMinion = (req, res, next) => {

}

export default {getMinions, newMinion, getMinionById, updateMinion, deleteMinion}