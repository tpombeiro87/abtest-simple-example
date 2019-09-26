import React from 'react'
import { useSelector } from 'react-redux'

import Image from '../components/image'
import Cta from '../components/cta'
import Layout from '../components/layout'
import Spacer from '../components/spacer'
import LinkToCode from '../components/link-to-code'
import { AB_TEST_ADOPTION_INCREASE_IMG, AB_TEST_ADOPTION_INCREASE_CTA, AB_TEST_VARIANT, AB_TEST_CONTROL, AB_TEST_OUT_OF_EXPERIMENT } from '../lib/constants'

const Hoc = ({ abTest, abTests, variants, children }) => {
  return variants.find(variant => variant === abTests[abTest])
    ? children
    : null
}

const HocExample = () => {
  const activeAbTests = useSelector(state => state.activeAbTests, [])

  return (
    <Layout title='Generate Happy Tails - Adopt Today'>
      <Hoc abTest={AB_TEST_ADOPTION_INCREASE_IMG} abTests={activeAbTests} variants={[AB_TEST_VARIANT]}>
        <Image src='/dog.jpg' />
      </Hoc>

      <Hoc abTest={AB_TEST_ADOPTION_INCREASE_IMG} abTests={activeAbTests} variants={[AB_TEST_CONTROL, AB_TEST_OUT_OF_EXPERIMENT]}>
        <Image src='/cat.jpg' />
      </Hoc>

      <Spacer top={1} />

      <Hoc abTest={AB_TEST_ADOPTION_INCREASE_CTA} abTests={activeAbTests} variants={[AB_TEST_VARIANT]}>
        <Cta href='https://www.protectorabcn.es/' text='Support adoption!'/>
      </Hoc>
      <Hoc abTest={AB_TEST_ADOPTION_INCREASE_CTA} abTests={activeAbTests} variants={[AB_TEST_CONTROL, AB_TEST_OUT_OF_EXPERIMENT]}>
        <Cta href='https://www.protectorabcn.es/' text='Click here to support adoption!'/>
      </Hoc>

      <LinkToCode codeFileName='hoc-example' title='High Order Component Example' />
    </Layout>
  )
}

export default HocExample
