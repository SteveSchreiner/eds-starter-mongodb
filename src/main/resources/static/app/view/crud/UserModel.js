Ext.define('SimpleApp.view.crud.UserModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.SimpleApp-view-crud-UserModel',
	requires: ['SimpleApp.model.User'],
	
	formulas: {
		selectedUser: function(get) {
			return get('userpanel.selection');
		},		
		userSelected: function(get) {
			return !!get('selectedUser');
		}
	},	
	
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