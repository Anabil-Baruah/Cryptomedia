import { useState } from 'react';
import { Layout, Menu, Switch, Avatar, Dropdown } from 'antd';
import { UserOutlined, LogoutOutlined, SettingOutlined } from '@ant-design/icons';
import sunIcon from '../images/sun_icon.png';
import moonIcon from '../images/moon_icon.png';
import { Link } from 'react-router-dom';


const { Header } = Layout;

const TopNavbar = ({ user, onThemeToggle }) => {
    const [theme, setTheme] = useState('light');

    function setDarkMode() {
        document.querySelector('.app').setAttribute('data-theme', 'dark')
    }
    function setLightMode() {
        document.querySelector('.app').setAttribute('data-theme', 'light')
    }
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        onThemeToggle(newTheme);
        newTheme === 'dark' ? setDarkMode() : setLightMode();
    };
    const menu = (
        <Menu>
            <Menu.Item icon={<SettingOutlined />} key="1">Settings</Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}> <Link to="/EditProfile" >Profile</Link></Menu.Item>
            <Menu.Item icon={<LogoutOutlined />} key="3">Logout  </Menu.Item>
        </Menu>
    );
    return (
        <Header className="top-navbar">
            <div className="user-profile">
                <div className='theme-switcher'>
                    <img src={theme == "light" ? moonIcon : sunIcon}
                        alt=""
                        onClick={toggleTheme}
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
