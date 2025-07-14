import React from 'react'
import { MainLayout } from './components/MainLayout'
import Home from './pages/Home'

export const App: React.FC = () => {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  )
}