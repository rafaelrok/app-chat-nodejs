import { Request, Response } from 'express';
import { SettingsService } from '../services/SettingsService';
 
class SettingsController {

    async create(req: Request, res: Response) {
        const { chat, username } = req.body; // Desistrituração do body

        const settingsServices = new SettingsService();
        
        try {
            const settings = await settingsServices.create({ chat, username})

            return res.json(settings);
            
        } catch (err) {
            return res.status(400).json({
                message: err.message
            });
        }
    }
}

export { SettingsController }

/**
 * #Tipos de paramentros#
 * Routes Params = parametros de rotas
 * exe: http://localhost:3333/settings/1 pegar um id ou acesso alguma rota especifica no app
 * 
 * Query Params =  filtro e buscas
 * exe: http://localhost:3333/settings/1?search-algumacoisa para buscar alguma informação
 * 
 * Body Params = parametros que vem no corpo do app exemplo como um request de um user 
 * exe:
 * {
 *      name: Rafael
 *      idade: 25
 * }
 * 
 */