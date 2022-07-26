const express = require('express');
const apiRouter = express.Router();

//define controllers
const minionsController = require('./minions');
const ideaController = require('./ideas');
const meetingsController = require('./meetings');

//minions routes
apiRouter.get('/minions', minionsController.getMinions);
apiRouter.post('/minions/:minionId', minionsController.updateMinion);
apiRouter.post('/minions', minionsController.newMinion);
apiRouter.get('/minions/:minionId', minionsController.getMinionById);
apiRouter.delete('/minions/:minionId', minionsController.deleteMinion);

//ideas routes
apiRouter.get('/ideas', ideaController.getIdeas);
apiRouter.post('/ideas', ideaController.newIdea);
apiRouter.get('/ideas/:ideaId', ideaController.getIdeaById);
apiRouter.post('/ideas/:ideaId', ideaController.updateIdea);
apiRouter.delete('/ideas/:ideaId', ideaController.deleteIdea);

//meetings routes
apiRouter.get('/meetings', meetingsController.getMeetings);
apiRouter.post('/meetings', meetingsController.newMeeting);
apiRouter.delete('/meetings', meetingsController.deleteMeetings);



module.exports = apiRouter;
