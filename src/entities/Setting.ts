import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryColumn
} from "typeorm";

/**
 * "import uuid" substituiu o auto incrmente gerado pelo banco deixando a responsabilidade pelo sistema
 * devera adicionar a biblioteca (yean add uuid) e tipos (yarn add @type/uuid - D) após importar no projeto
 * seleciona a versão de gerador uuid no caso aqui esta a "V4" pode converter para gera direto um id numerico
 * com "V4 as uuid".
 */
import { v4 as uuid } from "uuid"

@Entity("settings")
class Setting{

    @PrimaryColumn()
    id: string;

    @Column()
    username: string;

    @Column()
    chat: boolean;

    @UpdateDateColumn()
    update_at: Date;

    @UpdateDateColumn()
    created_at: Date;

    //Verifica se o ID esta preenchido na base caso contrario cria um novo metodo corresponde como um "new settings()"
    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
    
}
export { Setting}