import React, { useState } from 'react'
import { Col, Row, Card, Switch, Button, Divider } from 'antd'
import anonymousImg from "../images/anonymous.png"
import PasswordChange from './modals/PasswordChange';
import { Link } from 'react-router-dom';
import { EditOutlined } from '@ant-design/icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faCalendar } from '@fortawesome/free-solid-svg-icons';
// import Divider from './HorizontaLine '

function Settings() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    function setDarkMode() {
        document.querySelector('.app').setAttribute('data-theme', 'dark')
    }
    function setLightMode() {
        document.querySelector('.app').setAttribute('data-theme', 'light')
    }
    const toggleTheme = (e) => {
        if (e)
            setDarkMode()
        else
            setLightMode()
    }

    return (
        <div>
            <Col span={24} style={{ justifyContent: 'space-between' }}>

                <div className="align-center"
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                    <div className='profileImg'>
                        <img
                            src={anonymousImg}
                            alt="" />

                        <div className="profile-cont">
                            <div className="profile-cont__item"><span className="name">Anabil Baruah</span></div>
                            <div className="profile-cont__item"><span className="email">email@mail.com</span></div>
                            <div className="profile-cont__item"><span className="join_date">23 th sept</span></div>
                        </div>
                        <div className="edit-btn">
                            <button className="edit-profile"><EditOutlined />&nbsp;Edit Profile</button>
                        </div>
                    </div>
                </div>

                <div className="profile_header">
                    <div className="social-icon">
                        <div className="icon">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </div>
                        <div className="icon">
                            <FontAwesomeIcon icon={faTwitter} />
                        </div>
                    </div>
                    <div className="location">
                        <div className="icon">
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                        </div>
                        <span className="text">Jorhat, Assam India</span>
                    </div>
                    <div className="date">
                        <div className="icon">
                            <FontAwesomeIcon icon={faCalendar} />
                        </div>
                        <span className="text">Member since 28th june</span>
                    </div>
                </div>

                <div className="profile">
                    {/* <Card className='card'>
                        <div className="card-content">
                            <h1 style={{ fontWeight: 'lighter' }}>Theme</h1>
                            <div className="switch-container" style={{ marginLeft: 'auto' }}>
                                <Switch onChange={toggleTheme} />
                            </div>
                        </div>
                    </Card>
                    <Card className='card' hoverable onClick={showModal}>
                        <h1 style={{ fontWeight: 'lighter' }}>Change Password</h1>
                    </Card>
                    <PasswordChange isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel} />
                    <Link to="/Subscriptions">
                        <Card className='card' hoverable>
                            <h1 style={{ fontWeight: 'lighter' }}>My plans</h1>
                        </Card>
                    </Link> */}
                    <Row gutter={16}>
                        <Col xs={24} sm={8}>
                            <div className="about-me">
                                <h2>About me:</h2>
                                <p>Im a mernstack developer with 100 years of industrail experience</p>
                            </div>
                        </Col>
                        <Col xs={24} sm={8}>
                            <div className="skills">
                                <h2>My tech stacks:</h2>
                                <div className="tech-stacks">
                                    <div className="tech">Node js</div>
                                    <div className="tech">React js</div>
                                    <div className="tech">MongoDB</div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={8}>
                            <div className="availability">
                                <h2>I am available for </h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Accusamus molestias porro neque voluptas distinctio ab inventore perferendis consequuntur perspiciatis alias!</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Col>
        </div>
    )
}

export default Settings
