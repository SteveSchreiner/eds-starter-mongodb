Ext.define('SimpleApp.view.crud.UserController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.SimpleApp-view-crud-UserController',

    init: function (view) {
    	var userStore = this.getStore('users');
    	userStore.load();
    	this.lookupReference('pagingtoolbar').setStore(userStore);
    },
	
	filterChange: function(field, newValue) {
		var userStore = this.getStore('users');
		if (newValue) {
			userStore.clearFilter(true);
			userStore.filter('filter', newValue);
		} else {
			userStore.clearFilter();
		}
	},

	deleteUser: function() {
		Ext.Msg.confirm('Really delete?', 'Are you sure?', 'onDeleteUserConfirm', this);
	},
	
	onDeleteUserConfirm: function(choice) {
		if (choice === 'yes') {
			var selectedUser = this.getViewModel().get('selectedUser');

			selectedUser.erase({
				callback: function(e) {
					Ext.toast('User deleted', 'Info', 't');
					this.getStore('users').load();
				}, 
				scope: this
			});
		}
	},

	newUser: function() {
		var newUser = Ext.create('SimpleApp.model.User', {
			lastName: 'New',
			firstName: 'Person',
			email: 'new@email.com'
		});

		this.getStore('users').insert(0, newUser);
		this.getView().getPlugin('storePanelRowEditing').startEdit(0, 0);
	}

});