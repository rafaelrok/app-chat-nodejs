import { getCustomRepository, Repository } from "typeorm";
import { Setting } from "../entities/Setting";
import { SettingsRepository } from "../repository/SettingsRepository";

interface ISettingsCreate{
    chat: boolean;
    username: string;
}

class SettingsService{
    private settingsRepo: Repository<Setting>;

    constructor() {
        this.settingsRepo = getCustomRepository(SettingsRepository);
    }

    async create({ chat, username }: ISettingsCreate) {
        const userAlreadyExists = await this.settingsRepo.findOne({
            username
        });

        if (userAlreadyExists) {
            throw new Error("Usuario ja existe no banco!");
        }

        const settings = this.settingsRepo.create({
            username,
            chat,
        });
        await this.settingsRepo.save(settings);

        return settings;
    }
}
export { SettingsService }