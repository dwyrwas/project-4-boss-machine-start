import { addToDatabase, deleteFromDatabasebyId, getAllFromDatabase, updateInstanceInDatabase } from "./db"

const getIdeas = (req, res, next) => {
    const allIdeas = getAllFromDatabase('ideas');
    res.send(allIdeas);
}

const newIdea = (req, res, next) => {
    const ideaToAdd = createIdea();
    addToDatabase('ideas', ideaToAdd);
    res.status(200).send('New idea created succesfully.');
}

const updateIdea = (req, res, next) => {
    const ideaToUpdateId = req.params.id;
    const ideas = getAllFromDatabase('ideas');
    const ideaToUpdate = ideas[ideaToUpdateId];
    ideaToUpdate = updateInstanceInDatabase('ideas', req.params);
    res.status(200).send('Idea successfully updated.');
}

const getIdeaById = (req, res, next) => {
    const ideaId = req.params.id;
}

const deleteIdea = (req, res, next) => {
    const ideaId = req.params.id;
    deleteFromDatabasebyId('ideas', ideaId);
    res.status(200).send('Idea deleted.');
} 

export default {getIdeas, newIdea, updateIdea, getIdeaById, deleteIdea}