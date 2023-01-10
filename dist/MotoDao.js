"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MotoDao = void 0;
const Moto_1 = __importDefault(require("./Moto"));
class MotoDao {
    constructor() {
        this.nomeTabela = 'tb_moto';
    }
    inserir(object) {
        console.log('Lógica de inserir');
        return true;
    }
    atualizar(object) {
        console.log('Lógica de atualizar');
        return true;
    }
    remover(id) {
        console.log('Lógica de remoção');
        return new Moto_1.default();
    }
    selecionar(id) {
        console.log('Lógica de seleção');
        return new Moto_1.default();
    }
    selecionarTodos() {
        console.log('Lógica de seleção total');
        return [new Moto_1.default()];
    }
}
exports.MotoDao = MotoDao;
