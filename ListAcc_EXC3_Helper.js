({
 getcontas : function(component) {
  
  let action = component.get("c.getAccount");
  
        
        action.setCallback(this, function(response){
        let state = response.getState();
         console.log(state);

        if(state == "SUCCESS"){
        component.set("v.contas", response.getReturnValue());
         console.log(response.getReturnValue());
                     
        }
                           
 });
        //da acesso a biblioteca do Aura e enfileira as ações do front do servidor
        $A.enqueueAction(action);
    }
})
