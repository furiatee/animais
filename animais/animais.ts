export class Animal{
    protected nome : string;
    protected idade : number;
 
     constructor(nome: string, idade: number){
         this.nome=nome;
         this.idade=idade;
     }
 
 
    public fazerSom(): void{
     console.log("O animal esta fazendo um som");
 }
    public andar(): void{
     console.log("O animal esta andando");
 }
 
    public comer(): void{
     console.log("O animal esta comendo")
    }
 
 }