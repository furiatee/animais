import { Pessoa} from "./Pessoa";

export class Funcionario extends Pessoa{
    private trabalhando : boolean
    

    constructor(nome: string, idade: number){
    super(nome, idade)
}

    public taTrabalhando(trabalhando: boolean): void{
    if(this.trabalhando==true){
    console.log("O funcionario", this.nome, "Esta trabalhando")
    }else{
    console.log("O funcionario não esta trabalhando")
    }
    }
}