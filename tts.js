'use strict';
/* global TTS, SpeechSynthesisUtterance */

TTS.speak = function(string) {
	if (typeof SpeechSynthesisUtterance !== 'undefined') {
		var uu = new SpeechSynthesisUtterance(string);
		uu.lang = 'en-US';
		uu.pitch = 1;
		uu.rate = 0.8;
		uu.voiceURI = 'native';
		uu.volume = 1;
		window.speechSynthesis.cancel();
		window.speechSynthesis.speak(uu);
		return true;
	}
	return false;
};
