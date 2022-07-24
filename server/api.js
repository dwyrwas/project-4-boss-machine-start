const express = require('express');
const apiRouter = express.Router();

const minionsController = require('./minions');

apiRouter.get('/minions', minionsController.getMinions);
apiRouter.post('/minions:minionId', minionsController.updateMinion);
apiRouter.post('/minions', minionsController.newMinion);
apiRouter.get('/minion:minionId', minionsController.getMinionById);
apiRouter.delete('/minion:minionId', minionsController.deleteMinion);

apiRouter.get('/ideas', )



module.exports = apiRouter;
