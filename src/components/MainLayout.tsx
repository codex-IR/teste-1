import React from 'react'
import { Layout } from 'antd'

const { Header, Content, Footer } = Layout

export const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <Layout style={{ minHeight: '100vh' }}>
    <Header style={{ color: '#fff' }}>Header</Header>
    <Content style={{ padding: '24px' }}>{children}</Content>
    <Footer style={{ textAlign: 'center' }}>Footer</Footer>
  </Layout>
)