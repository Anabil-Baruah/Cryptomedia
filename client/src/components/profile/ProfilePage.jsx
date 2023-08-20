import React, { useEffect, useState } from 'react'
import { Col, Row, Card, Switch, Button, Divider, Timeline } from 'antd'
import anonymousImg from "../../images/anonymous.png"
// import PasswordChange from '../modals/PasswordChange';
import { Link } from 'react-router-dom';
import { EditOutlined } from '@ant-design/icons';
import axios from '../../services/axios'
import './profile.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faCalendar } from '@fortawesome/free-solid-svg-icons';
// import Divider from './HorizontaLine '
import { formatDate } from '../helperFunctions/formValidators'

function ProfilePage() {
    const [username, setUsername] = useState()
    const [email, setemail] = useState()
    const [date, setdate] = useState()
    const [linkedin, setlinkedin] = useState()
    const [instagram, setinstagram] = useState()
    const [facebook, setfacebook] = useState()
    const [website, setwebsite] = useState()
    const [twitter, settwitter] = useState()

    

    useEffect(() => {
        axios.get('/api/getProfile')
            .then(res => {
                console.log(res.data)
                
                setdate(formatDate(res.data.user.createdAt))
                setUsername(res.data.user.username)
                setemail(res.data.user.email)

            })
            .catch(err => {
                console.log(err)
            })
    }, [])



    return (
        <div className='profile-details'>
            <Col span={24} style={{ justifyContent: 'space-between' }}>

                <div className="align-center"
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                    <div className='profileImg'>
                        <img
                            src={anonymousImg}
                            alt="" />

                        <div className="profile-cont">
                            <div className="profile-cont__item"><span className="name"><b>{username}</b></span></div>
                            <div className="profile-cont__item"><span className="email">{email}</span></div>
                            <div className="profile-cont__item"><span className="join_date">{date}</span></div>
                        </div>
                        <div className="edit-btn">
                            <Link to="/EditProfile">
                                <button className="edit-profile"><EditOutlined />&nbsp;Edit Profile</button>
                            </Link>
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
                                <h2>Im interested in:</h2>
                                <div className="tech-stacks">
                                    <div className="tech">Day trading</div>
                                    <div className="tech">Join ventures</div>
                                    <div className="tech">Swing trading</div>
                                    <div className="tech">Bitcoin</div>
                                    <div className="tech">Block chain</div>
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
                {/* <div className="timeline">
                        <Timeline>
                            <Timeline.Item color="green">Wrote blog</Timeline.Item>
                            <Timeline.Item color="blue">Written article</Timeline.Item>
                            <Timeline.Item color="red">Joined cryptomedia</Timeline.Item>
                        </Timeline>
                    </div> */}
            </Col>
        </div>
    )
}

export default ProfilePage
