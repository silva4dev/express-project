import express from 'express';
import messagesController from '../controllers/messages.controller';

const messagesRouter = express.Router();

messagesRouter.get('/', messagesController.getMessages);
messagesRouter.post('/', messagesController.postMessage);

export default messagesRouter;
