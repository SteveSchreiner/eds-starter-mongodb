Ext.define('SimpleApp.view.main.Main', {
	extend: 'Ext.container.Container',
	requires: [ 'SimpleApp.view.crud.UserGrid' ],

	layout: 'fit',

	items: [ {
		xclass: 'SimpleApp.view.crud.UserGrid'
	} ]

});
