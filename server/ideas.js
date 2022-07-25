const { addToDatabase, deleteFromDatabasebyId, getAllFromDatabase, updateInstanceInDatabase } = require('./db');
const { checkMillionDollarIdea } = require('./checkMillionDollarIdea');

const getIdeas = (req, res, next) => {
    const allIdeas = getAllFromDatabase('ideas');
    res.send(allIdeas);
}

const newIdea = (req, res, next) => {
    let newRevenue = req.params.weeklyRevenue;
    let newWeeks = req.params.numWeeks;
    if (checkMillionDollarIdea(newRevenue, newWeeks) === true) {
        const ideaToAdd = createIdea();
        addToDatabase('ideas', ideaToAdd);
        res.status(200).send('New idea created succesfully.');
    }
    
}

const updateIdea = (req, res, next) => {
    updateInstanceInDatabase('ideas', req.params);
    res.status(200).send('Idea successfully updated.');
}

const getIdeaById = (req, res, next) => {
    const ideaId = req.params.id;
}

const deleteIdea = (req, res, next) => {
    const ideaId = Number(req.params.id);
    const deleteStatus = deleteFromDatabasebyId('ideas', ideaId);
    if (deleteStatus === true) {
        res.status(200).send();
    } else {
        res.status(204).send();
    }
} 

module.exports = {getIdeas, newIdea, updateIdea, getIdeaById, deleteIdea}