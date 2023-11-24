import { Pessoa} from "./Pessoa";

export class Atleta extends Pessoa{

   private atleta : string;

   constructor(nome: string, idade: number){
    super(nome, idade)
}

comendo(): void{
    console.log("O Atleta esta comendo");
    }

    Treinando(): void{
    console.log("Esse Atleta esta treinando  ");
    }
}