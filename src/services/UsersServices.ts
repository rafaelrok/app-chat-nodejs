import { getCustomRepository, Repository } from 'typeorm';
import { User } from '../entities/User';
import { UsersRepository } from '../repository/UsersRepository';

class UsersService {
    private userRepo: Repository<User>;

    constructor() {
        this.userRepo = getCustomRepository(UsersRepository);
    }
    
    async create(email: string) {
        //Verificar se o usuário existe
        const userExists = await this.userRepo.findOne({
            email
        })

        // Se não existir salvar no DB
        if (userExists) {
            return userExists;
        }

        const user = this.userRepo.create({
            email
        });

        await this.userRepo.save(user)

        // Se existir, retorna usuário
        return user;
    }
}

export { UsersService }