"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Carro_1 = __importDefault(require("./Carro"));
const Pessoa_1 = __importDefault(require("./Pessoa"));
const Concessionaria_1 = __importDefault(require("./Concessionaria"));
// Criando objetos de carro
let carroA = new Carro_1.default('Veloster', 3);
let carroB = new Carro_1.default('Dodge Journey', 4);
let carroC = new Carro_1.default('C63 Coupe', 2);
//lista de carros da concessionaria
let listaDeCarros = [carroA, carroB, carroC];
let concessionaria = new Concessionaria_1.default('Av Paulist', listaDeCarros);
//Exibir a lista de carros
//console.log(concessionaria.mostrarListaDeCarros());
//Comprar o carro
let cliente = new Pessoa_1.default('João', 'C63 Coupe');
console.log(cliente.dizerCarroPreferido());
concessionaria.mostrarListaDeCarros().map((carro) => {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        //comprar carro
        cliente.comprarCarro(carro);
    }
    ;
});
console.log(cliente.dizerQueCarroTem());
