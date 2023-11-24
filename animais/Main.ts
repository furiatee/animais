import { Abelha } from "./Abelha";


let abelinha = new Abelha("fineco", 2);
abelinha.fazerSom();
abelinha.polinizando(false);
abelinha.voando(false);


import { Jetski } from "./Jestski";
let Jetskizin = new Jetski(4, "amarelo", 8)
Jetskizin.fazerSom()
Jetskizin.funcionando(true)

import {Sorvete} from "./Sorvete";
let sorveto = new Sorvete ('chocolate','duro',4,4)
sorveto.Saborear()
sorveto.morder()

import {Funcionario} from "./Funcionario"
let funcionarios = new Funcionario("carlo", 90)
funcionarios.taTrabalhando(true)
funcionarios.falando()
funcionarios.andando()

import {Atleta} from "./Atleta" 
let atletao = new Atleta("Andras", 30)
atletao.Treinando()
atletao.andando()
atletao.falando()

import {Estudante} from "./Estudante"
let Estudador = new Estudante("Dylan", 20)
Estudador.estudando(false);
Estudador.conversando(false);