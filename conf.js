exports.config = {
    capabilities: {
        browserName: 'firefox'
      },
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./tests/spec.js'],
}