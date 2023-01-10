import Carro from "./Carro";

export default class Pessoa {
    
    constructor (nome: string, carroPreferido: string) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
        
    };

    private nome: string;
    private carroPreferido: string;
    private carro: any;

    public dizerNome(): string {
        return this.nome;
    };

    public dizerCarroPreferido(): string {
        return this.carroPreferido;
    };

    public comprarCarro(carro: Carro): void {
        this.carro = carro;
    }

    public dizerQueCarroTem(): Carro {
        return this.carro;
    };

}