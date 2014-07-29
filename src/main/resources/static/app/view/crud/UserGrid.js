Ext.define('SimpleApp.view.crud.UserGrid', {
	extend: 'Ext.grid.Panel',

	requires: [ 'SimpleApp.view.crud.UserController', 'SimpleApp.view.crud.UserModel' ],

	reference: 'userGrid',

	controller: {
		xclass: 'SimpleApp.view.crud.UserController'
	},
	viewModel: {
		xclass: 'SimpleApp.view.crud.UserModel'
	},

	title: 'STORE_READ and STORE_MODIFY',
	bind: {
		store: '{users}'
	},

	listeners: {
		canceledit: 'onCancelEdit',
		edit: 'onEdit'
	},

	columns: [ {
		dataIndex: 'firstName',
		text: 'First Name',
		flex: 1,
		editor: {
			xtype: 'textfield',
			allowBlank: false
		}
	}, {
		dataIndex: 'lastName',
		text: 'Last Name',
		flex: 1,
		editor: {
			xtype: 'textfield',
			allowBlank: false
		}
	}, {
		dataIndex: 'email',
		text: 'Email',
		flex: 1,
		editor: {
			xtype: 'textfield',
			allowBlank: false,
			vtype: 'email'
		}
	}, {
		dataIndex: 'department',
		text: 'Department',
		flex: 1,
		editor: {
			xtype: 'combobox',
			store: 'Companies',
			queryMode: 'local',
			displayField: 'text',
			valueField: 'text'
		}
	} ],

	plugins: {
		ptype: 'rowediting',
		pluginId: 'storePanelRowEditing'
	},

	dockedItems: [ {
		xtype: 'toolbar',
		dock: 'top',
		items: [ {
			text: 'New',
			handler: 'newUser'
		}, {
			text: 'Delete',
			handler: 'deleteUser',
			bind: {
				disabled: '{!userSelected}'
			}
		}, '->', {
			fieldLabel: 'Filter',
			labelWidth: 40,
			xtype: 'textfield',
			listeners: {
				change: {
					fn: 'filterChange',
					buffer: 350
				}
			}
		} ]
	}, {
		xtype: 'pagingtoolbar',
		reference: 'pagingtoolbar',
		dock: 'bottom',
		displayInfo: true
	} ]

});