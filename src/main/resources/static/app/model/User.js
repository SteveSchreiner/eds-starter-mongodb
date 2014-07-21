Ext.define("SimpleApp.model.User",
{
  extend : "Ext.data.Model",
  requires : [ "Ext.data.proxy.Direct", "Ext.data.validator.Email", "Ext.data.validator.Presence" ],
  fields : [ {
    name : "id",
    type : "string"
  }, {
    name : "firstName",
    type : "string",
    convert : null
  }, {
    name : "lastName",
    type : "string",
    convert : null,
    validators : [ {
      type : "presence"
    } ]
  }, {
    name : "email",
    type : "string",
    convert : null,
    validators : [ {
      type : "email"
    } ]
  }, {
    name : "department",
    type : "string",
    convert : null
  } ],
  proxy : {
    type : "direct",
    api : {
      read : "userService.read",
      create : "userService.create",
      update : "userService.update",
      destroy : "userService.destroy"
    },
    reader : {
      rootProperty : "records"
    },
    writer : {
      writeAllFields : true
    }
  }
});