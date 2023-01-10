"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dao = void 0;
class Dao {
    constructor() {
        this.nomeTabela = '';
    }
    inserir(object) {
        console.log('Lógica de inserção');
        return true;
    }
    atualizar(object) {
        console.log('Lógica de atualização');
        return true;
    }
    remover(id) {
        console.log('Lógica de remoção');
        return Object();
    }
    selecionar(id) {
        console.log('Lógica de seleção');
        return Object();
    }
    selecionarTodos() {
        console.log('Lógica de seleção total');
        return Object();
    }
}
exports.Dao = Dao;
