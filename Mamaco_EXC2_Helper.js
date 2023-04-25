({
	getData : function(component) {
		
        //criando uma variável que chama meu método na classe
        var action = component.get('c.getAccounts');
        //response é quando faz um teste com servidor
        //e obtem uma reposta positiva dele
        
        //setCallback= define a função de retorno de uma chamada que é
        //executada após o retorno de uma ação do apex
        //this vai ativar
        action.setCallback(this, $A.getCallback(function (response) {
            //O setcallback obtem um resultado positivo da consulta do servidor
            
            //status ou estado SUCESS, ERROR e INCOMPLETE
            var state = response.getState();
            
            
            //se o state for pósitivo vai atribuir um valor para a variável
            //que eu preciso preencher
            if (state === "SUCCESS") {
                component.set('v.mydata', response.getReturnValue());
            } else if (state === "ERROR") {
                var errors = response.getError();
                console.error(errors);
            }
        }));
        
        //da acesso a biblioteca e enfileira as ações do front do servidor
        $A.enqueueAction(action);
    }
})
