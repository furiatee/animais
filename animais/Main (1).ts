import { Abelha } from "./Abelha";


let abelinha = new Abelha("amarelo", 2);
abelinha.fazerSom();
abelinha.polinizando(false);
abelinha.voando(false);


import { Jetski } from "./Jestski";
let Jetskizin = new Jetski(4, "rico", 8)
Jetskizin.fazerSom()
Jetskizin.funcionando(true)

import {Sorvete} from "./Sorvete";
let sorveto = new Sorvete ('chocolate','gelado',4,4)
sorveto.Saborear()
sorveto.morder()

import {Funcionario} from "./Funcionario"
let funcionarios = new Funcionario("joao", 90)
funcionarios.taTrabalhando(true)
funcionarios.falando()
funcionarios.andando()

import {Atleta} from "./Atleta" 
let atletao = new Atleta("Thaisa", 30)
atletao.Treinando()
atletao.andando()
atletao.falando()

import {Estudante} from "./Estudante"
let Estudador = new Estudante("Enzo", 20)
Estudador.estudando(false);
Estudador.conversando(false);