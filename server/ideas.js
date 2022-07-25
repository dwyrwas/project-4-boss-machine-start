import { addToDatabase, getAllFromDatabase, updateInstanceInDatabase } from "./db"

const getIdeas = (req, res, next) => {
    const allIdeas = getAllFromDatabase('ideas');
    res.JSON(allIdeas);
    next();
}

const newIdea = (req, res, next) => {
    const ideaToAdd = createIdea();
    addToDatabase('ideas', ideaToAdd);
    res.status(200).send('New idea created succesfully.');
    next();
}

const updateIdea = (req, res, next) => {
    const ideaToUpdateId = req.params.id;
    const ideas = getAllFromDatabase('ideas');
    const ideaToUpdate = ideas[ideaToUpdateId];
    ideaToUpdate = updateInstanceInDatabase('ideas', req.params);
    res.status(200).send('Idea successfully updated.');
    next(); 
}

const getIdeaById = (req, res, next) => {
    const ideaId = req.params.id;
    
    next();
}

const deleteIdea = (req, res, next) => {
    
    next();
} 

export default {getIdeas, newIdea, updateIdea, getIdeaById, deleteIdea}