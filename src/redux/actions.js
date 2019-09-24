export const LOADED_ACTIVE_AB_TESTS = 'LOADED_ACTIVE_AB_TESTS'

export const loadActiveAbTests = (payload) => {
  return ({ type: LOADED_ACTIVE_AB_TESTS, payload })
}
