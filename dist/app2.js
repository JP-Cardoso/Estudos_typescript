"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Carro_1 = __importDefault(require("./Carro"));
const Moto_1 = __importDefault(require("./Moto"));
let carro = new Carro_1.default('Marea', 4);
carro.acelerar();
carro.acelerar();
let moto = new Moto_1.default();
moto.acelerar();
moto.acelerar();
console.log(carro);
console.log(moto);