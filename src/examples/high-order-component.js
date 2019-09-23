import React from 'react'

import Image from '../components/image'
import Cta from '../components/cta'
import Layout from '../components/layout'

const Hoc = () =>
  <Layout title='HIGH ORDER COMPONENT EXAMPLE'>
    <Image src='/cat.jpg' />
    <Cta text='I love it!' />
  </Layout>

export default Hoc
