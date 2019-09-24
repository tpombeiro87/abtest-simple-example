import { APP_STATUS_LOADING, APP_STATUS_READY } from '../lib/constants'

import { LOADED_ACTIVE_AB_TESTS } from './actions'

const initialState = {
  appStatus: APP_STATUS_LOADING,
  activeAbTests: [],
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED_ACTIVE_AB_TESTS:
      return Object.assign({}, state, {
        appStatus: APP_STATUS_READY,
        activeAbTests: action.payload,
      })
    default:
      return state
  }
}

export default rootReducer
