import { useState } from 'react';
import { Layout, Menu, Switch, Avatar, Dropdown } from 'antd';
import { UserOutlined, LogoutOutlined, SettingOutlined } from '@ant-design/icons';
import sunIcon from '../images/sun_icon.png';
import moonIcon from '../images/moon_icon.png';

const { Header } = Layout;

const TopNavbar = ({ user, onThemeToggle }) => {
    const [theme, setTheme] = useState('light');

    function setDarkMode() {
        document.querySelector('.app').setAttribute('data-theme', 'dark')
    }
    function setLightMode() {
        document.querySelector('.app').setAttribute('data-theme', 'light')
    }
    const toggleTheme = (checked) => {
        const newTheme = checked ? 'dark' : 'light';
        setTheme(newTheme);
        onThemeToggle(newTheme);
        checked ? setDarkMode() : setLightMode()
    }
    const menu = (
        <Menu>
            <Menu.Item icon={<SettingOutlined />} key="1">Settings</Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}> Profile</Menu.Item>
            <Menu.Item icon={<LogoutOutlined />} key="3">Logout  </Menu.Item>
        </Menu>
    );
    return (
        <Header className="top-navbar">
            <div className="user-profile">
                <div className='theme-switcher'>
                    <Switch
                        checked={theme === 'dark'}
                        checkedChildren="Dark"
                        unCheckedChildren="Light"
                        onChange={toggleTheme}
                        style={{ backgroundImage: `url(${sunIcon})` }}
                    // onChange={handleThemeToggle}
                    />
                </div>
                <Dropdown overlay={menu} placement="bottomRight" arrow>
                    <div className="user-content">
                        <Avatar icon={<UserOutlined />} />
                        <span className="user-name">{user.name}</span>
                    </div>
                </Dropdown>
            </div>
        </Header>
    );
};

export default TopNavbar;
