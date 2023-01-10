import { DaoInterface } from "./DaoInterface";
import Pessoa from "./Pessoa";

export class PessoaDao implements DaoInterface{

    nomeTabela: string = 'tb_pessoa';

    inserir(object: Pessoa): boolean {
        console.log('Lógica deInserir');
        return true;
    }

    atualizar(object: Pessoa): boolean {
        console.log('Lógica de atualilzar');
        return true;
    }

    remover(id: number): Pessoa {
        console.log('Lógica de deleção');
        return new Pessoa('', '');
    }

    selecionar(id: number): Pessoa {
        console.log('Lógica de selecionar');
        return new Pessoa('', '');
    }

    selecionarTodos(): [any] {
        console.log('Lógca de selecionar');
        return [new Pessoa('', '')];
    }
}