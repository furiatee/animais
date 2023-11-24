export class Pessoa{
    protected nome : string;
    protected idade : number;
    protected oculos : boolean
 
 
     constructor(nome: string, idade: number){
     this.nome = nome
     this.idade = idade
   }
    
     comendo(): void{
     console.log("comendo");
     }
 
     andando(): void{
     console.log("andando");
     }
 
     falando(): void{
     console.log("falando");
     }
   }