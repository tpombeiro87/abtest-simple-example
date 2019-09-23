import React from 'react'

import Image from '../components/image'
import Cta from '../components/cta'
import Layout from '../components/layout'
import Spacer from '../components/spacer'

const ReduxSelector = () =>
  <Layout title='REDUX SELECTOR'>
    <Image src='/dog.jpg' />
    <Spacer top={1} />
    <Cta text='It is amazing!' />
  </Layout>

export default ReduxSelector
