import Cookies from 'js-cookie'
import uuid from 'uuid/v4'

import {
  ATTRIBUTION_COOKIE_NAME,
  DOMAIN,
} from './constants'

export const generateUser = () => {
  const user = uuid()
  Cookies.set(ATTRIBUTION_COOKIE_NAME, user, { expires: 365, domain: DOMAIN })
  return user
}

export const getUserId = () => {
  const currentUser = Cookies.get(ATTRIBUTION_COOKIE_NAME)

  if (currentUser) {
    return currentUser
  }

  return generateUser()
}
