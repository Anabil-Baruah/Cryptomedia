import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from 'antd'
import {
  Navbar,
  Homepage,
  Cryptocurrencies,
  CryptoDetails, News,
  Auth, ProfilePage,
  Subscriptions,
  TopNavbar,
  EditProfile,
  RequireAuth
} from './components'
import './scss/App.scss'
import Favourits from './components/favourites/Favourits'
import Footer from './components/footer/Footer'
import useAuth from './hooks/useAuth'
import useTheme from './hooks/useTheme'

function App() {

  const { auth } = useAuth()
  console.log(useTheme(), "theme")
  const isLogin = auth.accessToken ? true : false




  return (
    <>
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main" >
          <TopNavbar />
          <Layout>
            <div className="routes">
              <Routes>
                <Route exact path="/" element={<Homepage />} />
                <Route exact path="/cryptocurrencies" element={<Cryptocurrencies simplified={false} />} />
                <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
                <Route exact path="/news" element={<News />} />
                <Route exact path="/subscriptions" element={<Subscriptions />} />
                {/* Only render the "EditProfile" component when the user is authenticated */}
                <Route element={<RequireAuth />}>
                  <Route exact path="/EditProfile" element={<EditProfile />} />
                  <Route exact path="/ProfilePage" element={<ProfilePage />} />
                  <Route exact path="/favourits" element={<Favourits />} />
                </Route>
                {/* Render the "Login" component only when the user is not authenticated */}
                <Route exact path="/login" element={!isLogin ? <Auth /> : <Homepage />} />
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
