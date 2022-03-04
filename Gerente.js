import { Funcionario } from "./Funcionario.js";

export class Gerente extends Funcionario{
    constructor(nome, cpf) {
        super(nome, 3440, cpf);
        this._bonificacao = 1.1;
    };
}