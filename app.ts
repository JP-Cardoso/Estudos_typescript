class Carro {

    constructor (modelo: string, numeroDePortas: number) {
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    };

    private modelo: string;
    private numeroDePortas: number;
    private velocidade: number = 0;

    public acelerar(): void {
        this.velocidade = this.velocidade + 10;
    };

    public parar(): void {
        this.velocidade = 0;
    };  

    public velocidadeAtual(): number {

        return this.velocidade;
    };

}

class Concessionaria {

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
        return this.carroPreferido;
    };

    public comprarCarro(carro: Carro): void {
        this.carro = carro;
    }

    public dizerQueCarroTem(): Carro {
        return this.carro;
    };

}

// Criando objetos de carro
let carroA = new Carro('Veloster', 3);
let carroB = new Carro('Dodge Journey', 4);
let carroC = new Carro('C63 Coupe', 2);

//lista de carros da concessionaria
let listaDeCarros: Carro[] = [carroA,carroB, carroC];

let concessionaria = new Concessionaria('Av Paulist', listaDeCarros); 

//Exibir a lista de carros
//console.log(concessionaria.mostrarListaDeCarros());

 
//Comprar o carro

let cliente = new Pessoa('João','C63 Coupe');

console.log(cliente.dizerCarroPreferido());

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
   if(carro['modelo'] == cliente.dizerCarroPreferido()) {
    
        //comprar carro
        cliente.comprarCarro(carro);
   };    
});

console.log(cliente.dizerQueCarroTem());
