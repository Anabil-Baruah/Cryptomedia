import { useState } from 'react';
import { Layout, Menu, Avatar, Dropdown, message, Popconfirm } from 'antd';
import { UserOutlined, LogoutOutlined, SettingOutlined, LoginOutlined } from '@ant-design/icons';
import sunIcon from '../../images/sun_icon.png';
import moonIcon from '../../images/moon_icon.png';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useTheme from '../../hooks/useTheme';
import './topNavbar.scss';


const { Header } = Layout;

const TopNavbar = () => {
    const { logout } = useAuth();
    const { auth } = useAuth();
    const { theme, toggleTheme} = useTheme();
    const username = auth.username

    const isLogin = auth.accessToken ? true : false

    const cancel = (e) => {
        console.log(e);
    };
//    console.log(theme, "theme")
    const menu = (
        <Menu size="largest">
            <Menu.Item icon={<SettingOutlined />} key="1">Settings</Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}> <Link to="/ProfilePage" >Profile</Link></Menu.Item>
            <Popconfirm
                title="Logout"
                description="Are you sure want to logout?"
                onConfirm={isLogin ? logout : null}
                onCancel={cancel}
                okText="Yes"
                cancelText="No"
            >
                {
                    !isLogin ? (
                        <Menu.Item icon={<LoginOutlined />} key="3">Login  </Menu.Item>
                    ) : (
                        <Menu.Item icon={<LogoutOutlined />} key="3">Logout </Menu.Item>
                    )
                }
            </Popconfirm>
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
                        <span className="user-name">{isLogin ? username : "Sign In"}</span>
                    </div>
                </Dropdown>
            </div>
        </Header>
    );
};

export default TopNavbar;
