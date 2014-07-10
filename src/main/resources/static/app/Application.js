Ext.define('SimpleApp.Application', {
	extend: 'Ext.app.Application',
	
	name: 'SimpleApp',

	constructor: function() {
		Ext.direct.Manager.addProvider(Ext.app.REMOTING_API);
		this.callParent(arguments);
	},

	launch: function() {
		Ext.fly('appLoadingIndicator').destroy();
	}
});
