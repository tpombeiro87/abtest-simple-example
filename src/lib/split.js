const { SplitFactory } = require('@splitsoftware/splitio')

var factory = SplitFactory({
  core: {
    authorizationKey: 'ui090l0b2are68opbk2j5h50a6srj9vedoqd',
    key: 'CUSTOMER_ID',
  },
  startup: {
    readyTimeout: 1.5,
  },
})

var client = factory.client()

client.on(client.Event.SDK_READY, function () {
  var treatment = client.getTreatment('test')

  if (treatment === 'on') {
    // insert on code here
  } else if (treatment === 'off') {
    // insert off code here
  } else if (treatment === 'test') {
    // insert test code here
  } else {
    // insert control code here
  }
})
