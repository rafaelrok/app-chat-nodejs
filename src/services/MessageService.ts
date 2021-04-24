import { getCustomRepository, Repository, UsingJoinColumnOnlyOnOneSideAllowedError } from "typeorm";
import { Message } from "../entities/Message";
import { MessageRepository } from "../repository/MessageRepository";

interface IMessageCreate {
    admin_id?: string;
    text: string;
    user_id: string;
}

class MessageService {
    private messageRepo: Repository<Message>;
    
    constructor() {
        this.messageRepo = getCustomRepository(MessageRepository);
    }

    async create({admin_id, text, user_id}: IMessageCreate) {
        const message = this.messageRepo.create({
            admin_id,
            text,
            user_id
        });

        await this.messageRepo.save(message);

        return message;
    }

    async listByUser(user_id: string) {       
        const list = await this.messageRepo.find({
            where: { user_id },
            relations: ["user"],
        });
        return list;
    }
}

export { MessageService };


