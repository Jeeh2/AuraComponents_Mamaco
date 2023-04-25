({
	init : function(component, event, helper) {
        component.set("v.mycolumns", [
            {label: "Account Name",     fieldName: "Name",        type:"Name"},
            {label: "Rating",           fieldName: "Rating",      type:"Picklist"}
            
        ]);
        
       helper.getData(component);
  },
    
   handleClick: function (component, event) {
        component.set("v.section", "A");
    },

    handleSectionToggle: function (component, event) {
        var openSections = event.getParam('openSections');
    }
})
