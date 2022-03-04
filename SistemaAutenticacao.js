//Ser autenticável significa ter o método autenticar
// Duck type: usado em linguagens fracamente tipadas

export class SistemaAutenticacao{
    static login(autenticavel, senhaInput){
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senhaInput);
        }
        return false;
    };
    static ehAutenticavel(autenticavel) {
        return "autenticar" in autenticavel && 
        autenticavel.autenticar instanceof Function;
    }
}