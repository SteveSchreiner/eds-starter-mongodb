/**
 * The main application class. An instance of this class is created by app.js
 * when it calls Ext.application(). This is the ideal place to handle
 * application launch and initialization details.
 */
Ext.define('SimpleApp.Application', {
	extend: 'Ext.app.Application',
	requires: [ 'Ext.direct.RemotingProvider' ],
	name: 'SimpleApp',

	views: [ 'crud.UserPanel' ],

	models: [ 'User' ],

	constructor: function() {
		Ext.direct.Manager.addProvider(Ext.app.REMOTING_API);
		this.callParent(arguments);
	},

	launch: function() {
		Ext.fly('appLoadingIndicator').destroy();
	}
});
