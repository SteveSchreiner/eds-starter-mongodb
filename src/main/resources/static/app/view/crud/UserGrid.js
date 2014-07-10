Ext.define('SimpleApp.view.crud.UserGrid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.SimpleApp-view-crud-UserGrid',
	requires: ['SimpleApp.view.crud.UserController', 'SimpleApp.view.crud.UserModel'],
	
	reference: 'userpanel',
	
	controller: 'SimpleApp-view-crud-UserController',
	viewModel: {
		type: 'SimpleApp-view-crud-UserModel'
	},

	title: 'CRUD with MongoDB',
	bind: {
		store: '{users}'
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
			bind: {
				disabled: '{!userSelected}'
			}
		}, '->', {
			fieldLabel: 'E-Mail Filter',
			labelWidth: 80,
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