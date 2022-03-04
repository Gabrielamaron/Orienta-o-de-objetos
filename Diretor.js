import { Funcionario } from "./Funcionario.js";

export class Diretor extends Funcionario{
    constructor(nome, cpf) {
        super(nome, 5600, cpf);
        this._bonificacao = 2;
    };
}