import React from 'react'
import { useSelector } from 'react-redux'

import Image from '../components/image'
import Cta from '../components/cta'
import Layout from '../components/layout'
import Spacer from '../components/spacer'
import LinkToCode from '../components/link-to-code'
import { AB_TEST_ADOPTION_INCREASE_IMG, AB_TEST_ADOPTION_INCREASE_CTA, AB_TEST_VARIANT } from '../lib/constants'

const ReduxSelectorExample = () => {
  const activeAbTests = useSelector(state => state.activeAbTests)

  return (
    <Layout title='REDUX SELECTOR EXAMPLE'>
      {
        activeAbTests[AB_TEST_ADOPTION_INCREASE_IMG] === AB_TEST_VARIANT
          ? <Image src='/dog.jpg' />
          : <Image src='/cat.jpg' />
      }
      <Spacer top={1} />
      {
        activeAbTests[AB_TEST_ADOPTION_INCREASE_CTA] === AB_TEST_VARIANT
          ? <Cta href='https://www.protectorabcn.es/' text='Support adoption!'/>
          : <Cta href='https://www.protectorabcn.es/' text='Click here to support adoption!'/>
      }
      <LinkToCode codeFileName='redux-selector-example' />
    </Layout>
  )
}

export default ReduxSelectorExample
