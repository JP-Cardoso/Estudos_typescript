import Veiculo from "./Veiculo";

class Carro extends Veiculo{

    constructor (modelo: string, numeroDePortas: number) {
        super()
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    };
   
    private numeroDePortas: number;

  
}

export default Carro;