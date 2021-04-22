import { Router } from 'express';
import { SettingsController } from './controllers/SettingsControllers';
import { UsersController } from './controllers/UsersController';

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();

routes.post("/settings", settingsController.create);
routes.post("/Users", usersController.create);



export { routes };