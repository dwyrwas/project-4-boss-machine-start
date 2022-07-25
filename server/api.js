const express = require('express');
const apiRouter = express.Router();

//define controllers
const minionsController = require('./minions').default;
const ideaController = require('./ideas').default;
const meetingsController = require('./meetings').default;

//minions routes
apiRouter.get('/minions', minionsController.getMinions);
apiRouter.post('/minions:minionId', minionsController.updateMinion);
apiRouter.post('/minions', minionsController.newMinion);
apiRouter.get('/minion:minionId', minionsController.getMinionById);
apiRouter.delete('/minion:minionId', minionsController.deleteMinion);

//ideas routes
apiRouter.get('/ideas', ideaController );
apiRouter.post('/ideas', ideaController);
apiRouter.get('/ideas', ideaController);
apiRouter.post('/ideas', ideaController);
apiRouter.delete('/ideas', ideaController);

//meetings routes
apiRouter.get('/meetings', meetingsController);
apiRouter.post('/meetings', meetingsController);
apiRouter.delete('/meetings', meetingsController);



module.exports = apiRouter;
