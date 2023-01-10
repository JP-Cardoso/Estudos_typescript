import { DaoInterface } from "./DaoInterface";
import Concessionaria from "./Concessionaria";

export class ConcessionariaDao implements DaoInterface {

    nomeTabela: string = 'tb_concessionaria';

    inserir(object: Concessionaria): boolean {
        console.log('Lógica de insert');
        return true;
    }

    atualizar(object: Concessionaria): boolean {
        console.log('Lógica update');
        return true;
    }

    remover(id: number): Concessionaria {
        console.log('Lógica de remoção');
        return new Concessionaria('', []);
    }

    selecionar(id: number): Concessionaria {
        console.log('Lógica de selecionar');
        return new Concessionaria('', []);
    }

    selecionarTodos(): [any] {
        console.log('Lógica de retornar todos');
        return [new Concessionaria('', [])];
    }

}