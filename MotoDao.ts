import { DaoInterface } from "./DaoInterface";
import Moto from "./Moto";

export class MotoDao implements DaoInterface {

    nomeTabela: string = 'tb_moto';

    inserir(object: Moto): boolean {
        console.log('Lógica de inserir');
        return true;
    }

    atualizar(object: Moto): boolean {
        console.log('Lógica de atualizar');
        return true;
    }

    remover(id: number): Moto {
        console.log('Lógica de remoção');
        return new Moto();
    }

    selecionar(id: number): Moto {
        console.log('Lógica de seleção');
        return new Moto();
    }

    selecionarTodos(): [any] {
        console.log('Lógica de seleção total');
        return [new Moto()];
    }

}