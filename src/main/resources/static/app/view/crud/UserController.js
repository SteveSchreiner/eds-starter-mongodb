Ext.define('SimpleApp.view.crud.UserController', {
	extend: 'Ext.app.ViewController',

	init: function(view) {
		var usersStore = this.getStore('users');
		usersStore.load();
		this.lookupReference('pagingtoolbar').setStore(usersStore);
	},

	filterChange: function(field, newValue) {
		var usersStore = this.getStore('users');
		if (newValue) {
			usersStore.filter('filter', newValue);
		}
		else {
			usersStore.clearFilter();
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
					Ext.toast({
						html: 'User deleted',
						title: 'Info',
						width: 200,
						align: 't'
					});
					this.getStore('users').load();
				},
				scope: this
			});
		}
	},

	onCancelEdit: function(editor, context, eOpts) {
		if (context.record.phantom) {
			this.getStore('users').remove(context.record);
		}
	},

	onEdit: function() {
		this.getStore('users').sync();
	},

	newUser: function() {
		var newUser = new SimpleApp.model.User({
			lastName: 'New',
			firstName: 'Person',
			email: 'new@email.com',
			department: 'Company'
		});

		this.getStore('users').insert(0, newUser);
		this.getView().getPlugin('storePanelRowEditing').startEdit(0, 0);
	}

});