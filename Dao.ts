import { DaoInterface } from "./DaoInterface";

export class Dao<T> implements DaoInterface<T> {
    nomeTabela: string = '';

    inserir(object: T):boolean {
        console.log('Lógica de inserção');
        return true;
    }

    atualizar(object: T): boolean {
        console.log('Lógica de atualização');
        return true;
    }

    remover(id: number): T {
        console.log('Lógica de remoção');
        return Object();
    }

    selecionar(id: number): T {
        console.log('Lógica de seleção');
        return Object();
    }

    selecionarTodos(): [T] {
        console.log('Lógica de seleção total');
        return Object();
    }
}