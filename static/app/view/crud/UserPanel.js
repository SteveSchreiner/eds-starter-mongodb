Ext.define('SimpleApp.view.crud.UserPanel', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.userpanel',
	controller: 'user',
	viewModel: {
		type: 'user'
	},

	title: 'CRUD with MongoDB',
	bind: {
		store: '{users}'
	},

	listeners: {
		itemclick: 'onItemClick',
		scope: 'controller'
	},

	columns: [ {
		xtype: 'gridcolumn',
		dataIndex: 'firstName',
		text: 'First Name',
		flex: 1,
		editor: {
			xtype: 'textfield',
			allowBlank: false
		}
	}, {
		xtype: 'gridcolumn',
		dataIndex: 'lastName',
		text: 'Last Name',
		flex: 1,
		editor: {
			xtype: 'textfield',
			allowBlank: false
		}
	}, {
		xtype: 'gridcolumn',
		dataIndex: 'email',
		text: 'Email',
		flex: 1,
		editor: {
			xtype: 'textfield',
			allowBlank: false,
			vtype: 'email'
		}
	} ],

	plugins: [ Ext.create('Ext.grid.plugin.RowEditing', {
		pluginId: 'storePanelRowEditing'
	}) ],

	dockedItems: [ {
		xtype: 'toolbar',
		dock: 'top',
		items: [ {
			text: 'New',
			handler: 'newUser'
		}, {
			text: 'Delete',
			handler: 'deleteUser',
			disabled: true,
			reference: 'deleteButton'
		}, '->', {
			fieldLabel: 'Filter',
			labelWidth: 40,
			xtype: 'textfield',
			reference: 'filtertextfield',
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