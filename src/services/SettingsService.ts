import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repository/SettingsRepository";

interface ISettingsCreate{
    chat: boolean;
    username: string;
}

class SettingsService{

    async create({ chat, username }: ISettingsCreate) {
        const settingsRepo = getCustomRepository(SettingsRepository);

        const userAlreadyExists = await settingsRepo.findOne({
            username
        });

        if (userAlreadyExists) {
            throw new Error("Usuario ja existe no banco!");
        }

        const settings = settingsRepo.create({
            username,
            chat,
        });
        await settingsRepo.save(settings);

        return settings;
    }
}
export { SettingsService }