import { Pessoa } from "./Pessoa";

export class Estudante extends Pessoa{

private estuda : boolean
private conversa : boolean

constructor(nome: string, idade: number){
    super(nome, idade)
}

   
   estudando(estuda: boolean): void{
    if(estuda==true){
    console.log("joao esta Estudando");
    }else{
    console.log("joao não esta Estudando")
    }
   }

   conversando(conversa: boolean): void{
    if(this.conversa==true){
    console.log("jessica esta Conversando");
    }else{
    console.log("jessica não esta Conversando")
    }
   }
}