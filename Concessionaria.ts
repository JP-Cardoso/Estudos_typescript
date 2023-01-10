import Carro from "./Carro";

export default class Concessionaria {

    constructor (endereco:string, listaDeCarros: Carro[]) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    };

    private endereco: string;
    private listaDeCarros: Carro[];

    public fornecerEndereco(): string {
        return this.endereco;
    };

    public mostrarListaDeCarros(): Carro[] {
        return this.listaDeCarros;
    };

}
