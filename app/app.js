require('angular').module('app', [
	require('angular-ui-router')
]).config(require('./routes'))

require('./modules/app') // require module app