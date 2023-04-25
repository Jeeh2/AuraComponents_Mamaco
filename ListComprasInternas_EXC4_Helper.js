({
	getData : function(component) {
		
        var action = component.get('c.getComprasInternas');
        action.setCallback(this, $A.getCallback(function (response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set('v.mylist', response.getReturnValue());
            } else if (state === "ERROR") {
                var errors = response.getError();
                console.error(errors);
            }
        }));
        $A.enqueueAction(action);
    },
    
    handleSuccess: function(component, event, helper) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title": "Sucesso!",
            "message": "Compra criada com sucesso."
        });
        toastEvent.fire();
        component.set("v.ComprasInternas__c", {'sobjectType': 'ComprasInternas__c'});
    }
})
	
