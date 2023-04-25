{
	init : function(component, event, helper) {
		component.set("v.mycolumns", [
            {label: "Nome",                fieldName: "Name",                type:"Name"},
            {label: "Nome do Produto",     fieldName: "Nome_do_Produto__c",  type:"text"},
            {label: "Data Compra",         fieldName: "DataCompra__c",       type:"Data"},
            {label: "Preço Total",         fieldName: "PrecoTotal__c",       type:"Currency"},
            {label: "Preço Unitário",      fieldName: "PrecoUnitario__c",    type:"Currency"}
            
        ]);
        
        helper.getData(component);
        helper.handleSuccess(component);
	}
})
