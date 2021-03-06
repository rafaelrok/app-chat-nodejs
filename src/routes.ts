import { Router } from 'express';
import { MessageController } from './controllers/MessageController';
import { SettingsController } from './controllers/SettingsControllers';
import { UsersController } from './controllers/UsersController';

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messageController = new MessageController();

routes.post("/settings", settingsController.create);

routes.post("/Users", usersController.create);

routes.post("/messages", messageController.create);
routes.get("/messages/:id", messageController.showByUser);


export { routes };