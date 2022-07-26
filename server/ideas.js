const { addToDatabase, deleteFromDatabasebyId, getAllFromDatabase, updateInstanceInDatabase, getFromDatabaseById } = require('./db');
const { checkMillionDollarIdea } = require('./checkMillionDollarIdea');

const getIdeas = (req, res, next) => {
    const allIdeas = getAllFromDatabase('ideas');
    res.send(allIdeas);
}

const newIdea = (req, res, next) => {
    const ideaToAdd = req.body;
    ideaToAdd.id = '';
    const addedIdea = addToDatabase('ideas', ideaToAdd);
    res.status(201).send(addedIdea);
}

const updateIdea = (req, res, next) => {
    const goodIdea = checkMillionDollarIdea(req.body.numWeeks, req.body.weeklyRevenue, next);
    const ideaUpdates = req.body;
    const ideaToUpdateId = req.params.ideaId;
    updateInstanceInDatabase('ideas', ideaUpdates);
    const updatedIdea = getFromDatabaseById('ideas', ideaToUpdateId);
    res.status(200).send(updatedIdea);
}

const getIdeaById = (req, res, next) => {
    const ideaId = req.params.ideaId;
    const foundIdea = getFromDatabaseById('ideas', ideaId);
    res.status(200).send(foundIdea);
}

const deleteIdea = (req, res, next) => {
    const ideaId = req.params.ideaId;
    deleteFromDatabasebyId('ideas', ideaId);
    res.status(204).send();
} 

module.exports = {getIdeas, newIdea, updateIdea, getIdeaById, deleteIdea}