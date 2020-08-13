import React from 'react'
// layouts
import { Header } from './layout/Header'
import { Footer } from './layout/Footer'
// router
import AppRouter from '../router/AppRouter'
// style
import '../assets/styles/index.css'

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <hr />
        <AppRouter />
        <hr />
      </main>
      <Footer />
    </div>
  )
}
