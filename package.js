'use strict';
/* global Package */

Package.describe({
  summary: 'Text To Speech (Simple wrapper of SpeechSynthesisUtterance for now)',
  version: '0.0.2',
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
		'tts.js'
	]);

	api.export('TTS');
});
