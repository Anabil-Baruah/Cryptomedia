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
import './scss/App.css'
import './scss/footer.css'
import './scss/profile.css'
import './scss/EditProfile.css'
import Favourits from './components/Favourits'
import Footer from './components/Footer'
import useAuth from './hooks/useAuth'

function App() {

  const { auth } = useAuth()
  const isLogin = auth.accessToken ? true : false
  console.log(isLogin, "token")

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
                <Route exact path="/" element={<Homepage />} />
                <Route exact path="/cryptocurrencies" element={<Cryptocurrencies simplified={false} />} />
                <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
                <Route exact path="/news" element={<News />} />
                <Route exact path="/favourits" element={<Favourits />} />
                <Route exact path="/ProfilePage" element={<ProfilePage />} />
                <Route exact path="/subscriptions" element={<Subscriptions />} />
                {/* Only render the "EditProfile" component when the user is authenticated */}
                <Route element={<RequireAuth />}>
                  <Route exact path="/EditProfile" element={<EditProfile />} />
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
