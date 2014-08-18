Ext.define('SimpleApp.Application', {
	extend: 'Ext.app.Application',
	requires: [ 'SimpleApp.controller.Root', 'SimpleApp.store.Companies',
			'SimpleApp.model.PageHit', 'SimpleApp.model.User',
			'Ext.direct.PollingProvider', 'Ext.direct.RemotingProvider', ],
	name: 'SimpleApp',

	views: [],

	controllers: [ 'Root' ],

	stores: [ 'Companies' ],

	models: [ 'PageHit', 'User' ],

	constructor: function() {
		var chartDataPoller = Ext.create('Ext.direct.PollingProvider', {
			id: 'chartDataPoller',
			type: 'polling',
			interval: 5 * 1000, // 5 seconds
			url: Ext.app.POLLING_URLS.chart
		});

		Ext.direct.Manager.addProvider(Ext.app.REMOTING_API, chartDataPoller);
		Ext.direct.Manager.getProvider('chartDataPoller').disconnect();

		this.callParent(arguments);
	}
});
