import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repository/UsersRepository';

class UsersService {

    async create(email: string) {
        const userRepo = getCustomRepository(UsersRepository);

        //Verificar se o usuário existe
        const userExists = await userRepo.findOne({
            email
        })

        // Se não existir salvar no DB
        if (userExists) {
            return userExists;
        }

        const user = userRepo.create({
            email
        });

        await userRepo.save(user)

        // Se existir, retorna usuário
        return user;
    }
}

export { UsersService }