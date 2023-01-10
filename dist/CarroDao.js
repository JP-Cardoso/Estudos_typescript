"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarroDao = void 0;
const Carro_1 = __importDefault(require("./Carro"));
class CarroDao {
    constructor() {
        this.nomeTabela = 'tb_carro';
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
        console.log('Lógiica de remover');
        return new Carro_1.default('', 0);
    }
    selecionar(id) {
        console.log('Lógica de selecionar');
        return new Carro_1.default('', 0);
    }
    selecionarTodos() {
        console.log('Lógica de selecionar todos');
        return [new Carro_1.default('', 0)];
    }
}
exports.CarroDao = CarroDao;
