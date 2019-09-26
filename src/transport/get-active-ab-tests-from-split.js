import { SplitFactory } from '@splitsoftware/splitio'

import { getUserId } from '../lib/attribution-util'
import { ACTIVE_AB_TESTS } from '../lib/constants'

const sdkFactory = SplitFactory({
  core: {
    authorizationKey: 'ui090l0b2are68opbk2j5h50a6srj9vedoqd',
    key: getUserId(),
  },
  startup: {
    readyTimeout: 1.5,
  },
})

const sdkClient = sdkFactory.client()

const getActiveAbTestsFromSplit = () =>
  new Promise((resolve) =>
    sdkClient.on(sdkClient.SDK_READY, () => {
      let activeAbTests = {}
      ACTIVE_AB_TESTS.forEach(abTest => {
        activeAbTests[abTest] = sdkClient.getTreatment(abTest)
      })
      console.info('Active AB Tests fetched from split:')
      console.info(activeAbTests)
      resolve(activeAbTests)
    })
  )

export default getActiveAbTestsFromSplit
