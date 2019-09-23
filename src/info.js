import React from 'react'
import styled from 'styled-components'

import Layout from './components/layout'
import Image from './components/image'

const Wrap = styled.div`
  max-width: 500px;

  font-family: 'Montserrat', sans-serif;
  letter-spacing: 3px;
  line-height: 30px;
`

const Highlight = styled.span`
  color: red;
`

const Link = styled.a`
  color: blue;
  text-decoration: underline;
`

const Info = () =>
  <Layout title='INFOS'>
    <Wrap>
      <p>This project was done by Tiago Pombeiro in the context of the presentation <Highlight>How to Build a Culture of Experimentation</Highlight></p>
      <p>The code and slides are available in this git repo <Link href='https://github.com/tpombeiro87/abtest-simple-example'>https://github.com/tpombeiro87/abtest-simple-example</Link></p>
      <Image src='/split-logo.png' />
      <p>The ab tests were setup using a tool called <Link href='http://www.split.io'>Split.io</Link></p>
    </Wrap>
  </Layout>

export default Info
