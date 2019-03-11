import Head from 'next/head'
import marked from 'marked'
import Layout from '../components/layouts/layout'
import Content from '../components/layouts/content/content'

import { content, title } from '../components/content/_application-confirmation'

export default () => (
  <Layout>
    <Head>
      <title>{title}</title>
    </Head>

    <Content>
      <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
    </Content>
  </Layout>
)
