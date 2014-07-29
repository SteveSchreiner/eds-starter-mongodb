Ext.define("SimpleApp.model.Department",
{
  extend : "Ext.data.Model",
  requires : [ "Ext.data.proxy.Direct" ],
  fields : [ "name" ],
  proxy : {
    type : "direct",
    directFn : "departmentService.read",
    reader : {
      rootProperty : "records"
    },
    writer : {
      writeAllFields : true
    }
  }
});