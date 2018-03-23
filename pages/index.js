import Head from 'next/head'
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

export default () => (
  <div>
    <Head>
      <link rel='stylesheet' href='https://unpkg.com/antd@3/dist/antd.min.css' />
    </Head>
    <Layout>
    <Sider style={{ background: '#3b3b3b'}}>Sider</Sider>
    <Layout>
      <Header style={{ background: '#6b6b6b'}}>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
    </Layout>
  </div>
)