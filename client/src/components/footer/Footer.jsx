import React from 'react'
import { Typography, Space, Row, Col, Layout, Button } from 'antd'
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'
import './footer.scss'


function Footer() {
    return (
        <div className="footer">

            <Row justify="space-around" gutter={[16, 16]}>
                <Col xs={24} sm={12} md={8} className='footerCont' >
                    <h3>Our social :</h3>
                    <Typography.Text className='socials'><Link style={{ color: 'inherit', textDecoration: 'none' }}>Instagram <InstagramOutlined /></Link></Typography.Text >
                    <Typography.Text className='socials'><Link style={{ color: 'inherit', textDecoration: 'none' }}>Twitter <TwitterOutlined /></Link></Typography.Text >
                    <Typography.Text className='socials'><Link style={{ color: 'inherit', textDecoration: 'none' }}>Linkedin <LinkedinOutlined /></Link></Typography.Text >
                    <Typography.Text className='socials'><Link style={{ color: 'inherit', textDecoration: 'none' }}>Facebook <FacebookOutlined /></Link></Typography.Text >
                </Col>
                <Col xs={24} sm={12} md={8} className='footerCont'>
                    <Typography.Title level={5}
                        style={{ color: 'white', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
                        Cryptomedia
                        All rights reserved
                        <br />
                        <Typography.Text className='socials' style={{ marginTop: '2rem' }}>
                            Ayn kind of contribution is appreciated.
                        </Typography.Text >
                        <button>

                            <h3>
                                <a href="https://github.com/Anabil-Baruah/Cryptomedia"
                                style={{textDecoration:'none', color:'inherit'}}
                                >
                                    Github
                                </a>
                            </h3>
                            <FontAwesomeIcon
                                icon={faGithub}
                                style={{ fontSize: '1.5rem' }}
                            // size={"2x"}
                            />

                        </button>
                    </Typography.Title>
                </Col>

                <Col xs={24} sm={12} md={8} className='footerCont'>
                    <h3>Navigation</h3>
                    <Typography.Text className='socials'><Link style={{ color: 'inherit', textDecoration: 'none' }}>Documentation</Link></Typography.Text >
                    <Typography.Text className='socials'><Link style={{ color: 'inherit', textDecoration: 'none' }}>Our APIs</Link></Typography.Text >
                    <Typography.Text className='socials'><Link style={{ color: 'inherit', textDecoration: 'none' }}> Referals</Link></Typography.Text >
                    <Typography.Text className='socials'><Link style={{ color: 'inherit', textDecoration: 'none' }}>Explore us</Link></Typography.Text >
                </Col>


            </Row>

        </div>

    )
}

export default Footer
