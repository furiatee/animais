export class Embarcacao{
    protected idade : number
  
    protected cor : string
    protected tamanho: number
 
    constructor(idade: number, cor: string, tamanho: number){
     this.idade = idade;
     this.cor = cor
     this.tamanho = tamanho
    }
 
    public fazerSom(): void{
     console.log("EEEEEEEEEEEEEEEEEEEE");
     }
 }