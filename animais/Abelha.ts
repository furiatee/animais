import { Animal } from "./Animal";

export class Abelha extends Animal{

    private voar: boolean
    private polinizar : boolean

    constructor(nome: string, idade: number){
    super(nome, idade)
}

   public fazerSom(): void{
    console.log("zzzzzzzzz");
}
   public polinizando(polinizar: boolean): void{
   if(this.polinizar==true){
   console.log("com polen")
   }else{
    console.log("sem polen")
   }

}
   public voando(voar: boolean): void{
    if(this.voar==true){
    console.log ("A abelha voa")
    }else{
    console.log("A abelha não voa")
    }

}
}