import { ConcessionariaInterface } from "./ConcessionariaInterface";
import Carro from "./Carro";

export default class Concessionaria implements ConcessionariaInterface{

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

    public horarioDeFuncionamento(): string {
        return 'De segunda a sexta das 08:00 as 18:00 e sábado das 08:00 as 12:00';
    };
}
