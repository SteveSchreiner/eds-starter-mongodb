Ext.define('SimpleApp.view.main.Main', {
	extend: 'Ext.container.Container',	
	requires: ['SimpleApp.view.crud.UserGrid'],
	
	layout: 'fit',

	items: [ {
		xtype: 'SimpleApp-view-crud-UserGrid'
	} ]

});
