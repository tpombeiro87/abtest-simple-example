import React from 'react'

import Image from '../components/image'
import Cta from '../components/cta'
import Layout from '../components/layout'
import Spacer from '../components/spacer'
import LinkToCode from '../components/link-to-code'
import { AB_TEST_ADOPTION_INCREASE_IMG, AB_TEST_ADOPTION_INCREASE_CTA, AB_TEST_VARIANT } from '../lib/constants'
import { ActiveAbTestsContext } from '../app'

const ContextExample = () =>
  <ActiveAbTestsContext.Consumer>
    { (activeAbTests) =>
      <Layout title='CONTEXT EXAMPLE'>
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
    }
  </ActiveAbTestsContext.Consumer>

export default ContextExample
