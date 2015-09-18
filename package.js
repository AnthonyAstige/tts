'use strict';
/* global Package */

Package.describe({
  summary: '',
  version: '0.0.0',
  name:'anthonyastige:tts',
  git:'git@github.com:AnthonyAstige/tts.git'
});

Package.onUse(function(api) {
	api.versionsFrom('1.1.0.3');

	/*
	api.use([
		'standard-app-packages'
	]);
	*/

	api.addFiles([
		'export.js',
		'anthony-tts.js'
	]);

	api.export('TTS');
});
