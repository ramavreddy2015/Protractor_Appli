const helper = require('./Support/commonFunctions.js');
const batchId = helper.genBatchId();

exports.config = {
   //Run locally
  seleniumAddress: 'http://localhost:4444/wd/hub',
  framework: 'jasmine',
  
  //run on sauce
  //seleniumAddress: "https://#{sauceUser}:#{sauceKey}@ondemand.saucelabs.com:443/wd/hub",

  Capabilities:
   {
     platform: 'Windows 10',
     browserName: 'chrome',
     version: '71.0',
     screenResolution: '2560x1600'
   },
  
  framework: 'jasmine',
   
  specs: ['spec1.js'],
    
  jasmineNodeOpts: {
     showColors: true,
     defaultTimeoutInterval: 30000
   },
      
  onPrepare: function () {
     global.batchId = batchId;
  }
};
