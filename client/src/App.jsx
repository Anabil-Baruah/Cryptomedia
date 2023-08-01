import { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import { Layout, Typography, Space, Switch } from 'antd'
import {
  Navbar,
  Exchanges,
  Homepage,
  Cryptocurrencies,
  CryptoDetails, News,
  Auth, ProfilePage,
  Subscriptions,
  TopNavbar,
  EditProfile
} from './components'
import './scss/App.css'
import './scss/footer.css'
import './scss/profile.css'
import './scss/EditProfile.css'
import Favourits from './components/Favourits'
import Footer from './components/Footer'

function App() {
  const user = {
    name: 'John Doe'
  };

  const handleThemeToggle = (newTheme) => {
    // Handle theme toggle logic here
    console.log('Theme changed:', newTheme);
  };

  return (
    <>
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main" >
          <TopNavbar user={user} onThemeToggle={handleThemeToggle} />
          <Layout>
            <div className="routes">
              <Routes>
                <Route exact path='/' element={<Homepage />} />
                <Route exact path='/exchanges' element={<Exchanges />} />
                <Route exact path='/cryptocurrencies' element={<Cryptocurrencies simplified={false} />} />
                <Route exact path='/crypto/:coinId' element={<CryptoDetails />} />
                <Route exact path='/news' element={<News />} />
                <Route exact path='/login' element={<Auth />} />
                <Route exact path='/favourits' element={<Favourits />} />
                <Route exact path='/ProfilePage' element={<ProfilePage />} />
                <Route exact path='/subscriptions' element={<Subscriptions />} />
                <Route exact path='/EditProfile' element={<EditProfile />} />
              </Routes>
            </div>
          </Layout>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
