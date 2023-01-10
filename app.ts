class Carro {

    constructor (modelo: string, numeroDePortas: number) {
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    };

    private modelo: string;
    private numeroDePortas: number;
    private velocidade: number = 0

    public acelerar(): void {
        this.velocidade = this.velocidade + 10;
    };

    public parar(): void {
        this.velocidade = 0;
    };  

    public velocidadeAtual(): number {

        return this.velocidade
    };

}

class Concessionaria {

    constructor (endereco:string) {
        this.endereco = endereco;
    };

    private endereco: string;
    private listaDeCarros: any;

    public fornecerEndereco(): string {
        return this.endereco;
    };

    public mostrarListaDeCarros(): any {
        return this.listaDeCarros;
    };

}

class Pessoa {
    
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
        return this.carroPreferido
    };

    public comprarCarro(carro: any): void {
        this.carro = carro
    }

    public dizerQueCarroTem(): any {
        return this.carro
    };

}

let pessoa = new Pessoa('João', 'Megane');
console.log(pessoa.dizerCarroPreferido());

