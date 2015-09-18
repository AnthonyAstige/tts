## Installation
`meteor add anthony:tts`

## Use
`TTS.speak('Hello World!')`

## What is this
Simple package that abstracts Text To Speech

Primarily a wrapper for SpeechSynthesisUtterance.  See [browser compatabilitity] (http://caniuse.com/#search=SpeechSynthesisUtterance).

* Note: Safari calls must be triggered by user action.

## Future plans

Add fallbacks / graceful degradation

1. Generate sounds on server when connected
1. Play .wav file manually specified

