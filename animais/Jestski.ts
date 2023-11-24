import { Embarcacao } from "./Embarcacao";

export class Jetski extends Embarcacao{
  
  private funciona : boolean

constructor (idade: number, cor: string, tamanho:number){
 super (idade, cor, tamanho)
}

   public fazerSom(): void{
    console.log("esta tocando musica");
    }
  
  public funcionando(funciona: boolean) :void{
    if(this.funciona==true){
    console.log("Essa embarcaçao funciona ");
    }else{
    console.log("nao funciona")
    }
  }
}