Ext.define('SimpleApp.view.crud.UserController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.user',

    init: function (view) {
    	var myStore = this.getStore('users');
    	myStore.load();
    	this.lookupReference('pagingtoolbar').setStore(myStore);
    },
	
	filterChange: function(field, newValue) {
		var myStore = this.getStore('users');
		if (newValue) {
			myStore.clearFilter(true);
			myStore.filter('filter', newValue);
		} else {
			myStore.clearFilter();
		}
	},

	onItemClick: function(button, record) {
		this.lookupReference('deleteButton').enable();
	},

	deleteUser: function() {
		this.lookupReference('deleteButton').disable();
		var sm = this.getView().getSelectionModel();
		var user = sm.getSelection();
		user[0].erase({
			callback: function(e) {
				this.getStore('users').load();
			}, 
			scope: this
		});
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