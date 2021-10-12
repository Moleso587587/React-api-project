const audioContext = new AudioContext()
await audioContext.audioWorklet.addModule('test-processor.js')
const testNode = new AudioWorkletNode(audioContext, 'test-processor')
testNode.connect(audioContext.destination)