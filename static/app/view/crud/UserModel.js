Ext.define('SimpleApp.view.crud.UserModel', {
	extend: 'Ext.app.ViewModel',

	alias: 'viewmodel.user',

	stores: {
		users: {
			model: 'SimpleApp.model.User',
			autoLoad: false,
			pageSize: 25,
			remoteSort: true,
			remoteFilter: true,
			autoSync: true,
			sorters: [ {
				property: 'lastName',
				direction: 'ASC'
			} ]
		}
	}

});