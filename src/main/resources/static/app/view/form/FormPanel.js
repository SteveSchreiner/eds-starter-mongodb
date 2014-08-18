Ext.define('SimpleApp.view.form.FormPanel', {
	extend: 'Ext.form.Panel',

	requires: [ 'SimpleApp.view.form.FormController', 'Ext.form.action.DirectLoad', 'Ext.form.action.DirectSubmit' ],

	controller: {
		xclass: 'SimpleApp.view.form.FormController'
	},

	bodyPadding: 10,
	title: 'FORM_LOAD, FORM_POST and SIMPLE',

	layout: {
		type: 'vbox',
		align: 'stretch'
	},

	api: {
		load: 'formLoadService.getFormData',
		submit: 'formSubmitService.handleFormSubmit'
	},
	paramsAsHash: true,

	items: [ {
		xtype: 'textfield',
		name: 'osName',
		fieldLabel: 'OS Name',
		allowBlank: false
	}, {
		xtype: 'textfield',
		name: 'osVersion',
		fieldLabel: 'OS Version'
	}, {
		xtype: 'numberfield',
		name: 'availableProcessors',
		fieldLabel: 'Available Processors'
	}, {
		xtype: 'datefield',
		name: 'date',
		fieldLabel: 'Date'
	}, {
		xtype: 'filefield',
		name: 'screenshot',
		fieldLabel: 'Screenshot'
	}, {
		xtype: 'textareafield',
		name: 'remarks',
		fieldLabel: 'Remarks',
		flex: 1
	} ],

	buttons: [ {
		xtype: 'button',
		handler: 'fillRemark',
		text: 'Call SIMPLE method'
	}, {
		xtype: 'button',
		text: 'Call FORM_LOAD method',
		handler: 'load'
	}, {
		text: 'Submit',
		handler: 'submit',
		disabled: true,
		formBind: true
	} ]

});