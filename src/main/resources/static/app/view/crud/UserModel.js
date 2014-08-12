Ext.define('SimpleApp.view.crud.UserModel', {
	extend: 'Ext.app.ViewModel',
	requires: [ 'SimpleApp.model.User' ],

	data: {
		selectedUser: null
	},

	stores: {
		users: {
			model: 'SimpleApp.model.User',
			autoLoad: false,
			pageSize: 25,
			remoteSort: true,
			remoteFilter: true,
			autoSync: false,
			sorters: [ {
				property: 'lastName',
				direction: 'ASC'
			} ]
		}
	}

});