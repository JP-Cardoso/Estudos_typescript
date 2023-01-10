"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    constructor(nome, carroPreferido) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    ;
    dizerNome() {
        return this.nome;
    }
    ;
    dizerCarroPreferido() {
        return this.carroPreferido;
    }
    ;
    comprarCarro(carro) {
        this.carro = carro;
    }
    dizerQueCarroTem() {
        return this.carro;
    }
    ;
}
exports.default = Pessoa;
