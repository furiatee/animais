import {Doce} from './Doce'


export class Sorvete extends Doce {
    constructor(sabor:string, textura:string, custo:number, saldo:number ){
        super(sabor,textura,custo,saldo)
    }
   public Saborear():void{
    console.log('humm')
   }

   public morder():void{
    console.log('gelo')
   }

   public comprar(custo:number){
    return this.saldo=this.saldo-this.custo

   }
  
}