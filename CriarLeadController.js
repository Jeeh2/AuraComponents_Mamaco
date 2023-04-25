({
	doInit: function(component, event, helper) {
        component.set("v.account", {'sobjectType': 'Lead'});
    },
    
    //evento aura > funções determinadas no sistema que realizam algo.
    
    handleSuccess: function(component, event, helper) {
        //permitir lançar ou incluir algo na $ biblioteca de salesforce
        var toastEvent = $A.get("e.force:showToast");
                               //carrega o evento pré definido do sistema
        toastEvent.setParams({
            //inclue parametros de informação
            //atribuição de parametros dentro da variável
            "title": "Sucesso!",
            "message": "Lead criado com sucesso.",
            "type": "success"
        });
        
        //o fire vai fazer ativar
        toastEvent.fire();
        component.set("v.lead", {'sobjectType': 'Lead'});
    }
})
