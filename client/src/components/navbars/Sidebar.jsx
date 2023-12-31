import React, { useState, useEffect } from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined, UserOutlined, SettingOutlined, DollarOutlined, StarFilled } from '@ant-design/icons'
import logoDark from '../../images/logo-dark-theme.svg'
import logoLight from '../../images/logo-light-theme.svg'
import icon from '../../images/cryptocurrency.png'
import useTheme from '../../hooks/useTheme';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true)
  const [screenSize, setSceenSize] = useState(null)
  const { theme } = useTheme();

  useEffect(() => {
    const handleResize = () => setSceenSize(window.innerWidth)
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (screenSize < 768)
      setActiveMenu(false)
    else
      setActiveMenu(true)
  }, [screenSize])
  return (
    <div className='nav-container'>
      <div className="logo-container">
        {/* <Avatar src={icon} size="large" /> */}
        <Typography.Title className='logo' level={2}>
          <Link to="/">
            <img src={theme == "dark" ? logoDark : logoLight} width={200} alt="" />
          </Link>
        </Typography.Title>
        <Button
          className='menu-control-container'
          onClick={() => setActiveMenu(!activeMenu)}>
          <MenuOutlined />
        </Button>
      </div>

      {activeMenu && (
        <div className="nav-items">
          <Menu style={{ backgroundColor: 'var(--bgPrimary' }}>
            <Menu.Item icon={<HomeOutlined />} style={{ color: 'var(--text-primary)' }}>
              <Link to="/" >Home</Link>
            </Menu.Item>
            <Menu.Item icon={<FundOutlined />} style={{ color: 'var(--text-primary)' }}>
              <Link to="/cryptocurrencies" >Cryptocurrencies</Link>
            </Menu.Item>
            {/* <Menu.Item icon={<MoneyCollectOutlined />}>
            <Link to="/exchanges">Exchanges</Link>
          </Menu.Item> */}
            <Menu.Item icon={<BulbOutlined />} style={{ color: 'var(--text-primary)' }}>
              <Link to="/news" >News</Link>
            </Menu.Item>
            <Menu.Item icon={<UserOutlined />} style={{ color: 'var(--text-primary)' }}>
              <Link to="/login" >Sign in</Link>
            </Menu.Item>
            <Menu.Item icon={<StarFilled />} style={{ color: 'var(--text-primary)' }}>
              <Link to="/favourits" >My favourits</Link>
            </Menu.Item>
            <Menu.Item icon={<DollarOutlined />} style={{ color: 'var(--text-primary)' }}>
              <Link to="/Subscriptions" >Subscription Plans</Link>
            </Menu.Item>
          </Menu>
        </div>
      )}
    </div>
  )
}

export default Navbar


