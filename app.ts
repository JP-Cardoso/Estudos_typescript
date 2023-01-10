import Carro  from './Carro';
import Pessoa  from './Pessoa';
import Concessionaria  from './Concessionaria';

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
