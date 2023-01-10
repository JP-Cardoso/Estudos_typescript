//import { MotoDao } from './MotoDao';
//import { CarroDao } from './CarroDao';
//import { PessoaDao } from './PessoaDao';
//import { ConcessionariaDao } from "./ConcessionariaDao";
import Concessionaria from "./Concessionaria";
import Pessoa from './Pessoa';
import Carro from './Carro';
import Moto from './Moto';
import { Dao } from "./Dao";

//let dao: ConcessionariaDao = new ConcessionariaDao();
let concessionaria=new Concessionaria('', []);

//dao.inserir(concessionaria);

//let dao2: PessoaDao = new PessoaDao();
let pessoa: Pessoa = new Pessoa('', '');

//dao2.atualizar(pessoa);

//let dao3: CarroDao = new CarroDao();
let carro: Carro = new Carro('', 0);

//dao3.inserir(carro);

//let dao4: MotoDao = new MotoDao();
let moto: Moto = new Moto();

//dao4.atualizar(moto);
let dao4: Dao<Pessoa> = new Dao<Pessoa>();
dao4.atualizar(pessoa);
