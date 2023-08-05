import React, { useState, useContext, useEffect } from 'react'
import useAuth from '../hooks/useAuth'
import { Form, Input, Button, Image, Card, Row, Col, message } from 'antd'
import Divider from './HorizontaLine '
import Loader from './Loader'
import loginImg from '../images/ai.png'
import google from '../images/google.png'
import useNotificationManager from './helperFunctions/notifications';
import { validatePassword } from './helperFunctions/formValidators'
import axios from '../services/axios.js'
import { Link, useNavigate, useLocation } from 'react-router-dom'



function SignUp({ isLogin, onFinish }) {
    // Form instance to access its methods
    return (
        <Form
            onFinish={onFinish}
            style={{ width: '100%' }}
            layout="vertical"
            requiredMark="optional"
        >

            <Form.Item name="username" label="Name"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    }
                ]}
            >
                <Input size='large' />
            </Form.Item>

            <Form.Item name="email" label="Email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    }
                ]}
            >
                <Input size='large' />
            </Form.Item>

            <Form.Item
                name="password"
                label="Set your password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    }
                ]}
                hasFeedback
            >
                <Input.Password size='large' />
            </Form.Item>

            <Form.Item
                name="retypePassword"
                label="Retype password"
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('The two passwords do not match!'));
                        },
                    }),
                ]}
                hasFeedback
            >
                <Input.Password size='large' />
            </Form.Item>
            <Form.Item style={{ textAlign: 'center' }} >
                <Row justify="center">
                    <Col>
                        <Button
                            type="primary"
                            htmlType="submit"
                            size="large"
                            style={{ borderRadius: '2px', marginRight: '8px' }}
                        >
                            Sign Up
                        </Button>
                    </Col>
                    <Col>
                        <Button
                            type="default"
                            size="large"
                            style={{ borderRadius: '2px' }}
                        >
                            Register
                        </Button>
                    </Col>
                </Row>
            </Form.Item>
        </Form>
    )
}

function Login({ isLogin, onFinish }) {
    return (
        <Form
            onFinish={onFinish}
            style={{ width: '100%' }}
            layout="vertical"
        >

            <Form.Item name="username" label="Username">
                <Input size='large' />
            </Form.Item>

            <Form.Item name="password" label="Password">
                <Input.Password size='large' />
            </Form.Item>

            <Form.Item style={{ textAlign: 'center' }} >
                <Row justify="center">
                    <Col>
                        <Button
                            type="primary"
                            htmlType="submit"
                            size="large"
                            style={{ borderRadius: '2px', marginRight: '8px' }}
                        >
                            Log in
                        </Button>
                    </Col>
                    <Col>
                        <Button
                            type="default"
                            size="large"
                            style={{ borderRadius: '2px', }}
                        >
                            Register
                        </Button>
                    </Col>
                </Row>
            </Form.Item>
        </Form>
    )
}

function Auth() {
    const [loading, setLoading] = useState(false)
    const [isLogin, setLogin] = useState(true)
    const { showNotification, contextHolder } = useNotificationManager();
    const [form] = Form.useForm();
    const { setAuth, login } = useAuth()
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const toggleAuth = () => {
        setLogin(!isLogin)
    }


    const handleFormSubmit = (values) => {
        // setLoading(true)
        let apiUrl = isLogin ? '/api/auth/login' : '/api/auth/signUp';
        axios.post(apiUrl, values)
            .then(response => {
                console.log('Response:', response);
                if (response.status === 200) {
                    showNotification('bottomRight', response.data)
                    const accessToken = response?.data?.message.accessToken;
                    login(accessToken)

                    // login(localStorage.getItem('accessToken', accessToken))

                    setAuth({
                        username: values.username,
                        password: values.password,
                        accessToken: accessToken
                    })
                    navigate(from, { replace: true })
                    message.success(`Welcome ${values.username}!}`)
                } else {
                    showNotification('bottomRight', response.data)
                }
            })
            .catch(error => {
                // console.error('Error:', error.response.data);
                showNotification('bottomRight', error.response.data)
            })
            .finally(() => {
                form.resetFields()
                setLoading(false);
            });
    }


    return (
        <>
            <Loader loading={loading} />
            {!loading && (
                <div className="login">
                    {contextHolder}
                    <div
                        className="login__image"
                        style={{ width: '100%', height: '100%' }}
                    >
                        <Image src={loginImg} alt='login' preview={false} />
                    </div>

                    <div className="login__info">
                        <Col>
                            <h1
                                style={{
                                    fontSize: '2.5rem',
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    marginBottom: '2rem'
                                }}>Welcome Folks</h1>
                            <p style={{ display: 'flex', textAlign: 'center' }}>Lorem ipsum,
                                dolor sit amet consectetur adipisicing elit.
                                Corrupti nesciunt nisi, sapiente ducimus dolorem tempore,
                                assumenda inventore pariatur consectetur, quia temporibus
                                aliquam repellat?</p>
                            <div style={{
                                textAlign: 'center',
                                alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'center'
                            }} >
                                <Button
                                    type="default"
                                    size="large"
                                    style={{
                                        borderRadius: '5px',
                                        textAlign: 'center',
                                        fontSize: '18px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        padding: '30px',
                                        marginTop: '20px'
                                    }}
                                >
                                    <Image src={google} style={{ height: '50px', width: '50px' }} alt='google' preview={false} />
                                    <span>Sign {isLogin ? "In" : "Up"} with Google</span>
                                </Button>
                            </div>
                        </Col>
                        <Divider />

                        <Card className='card'>
                            <div className="form-container ">
                                {isLogin ? <Login isLogin={isLogin} onFinish={handleFormSubmit} /> :
                                    <SignUp isLogin={isLogin} onFinish={handleFormSubmit} />}
                            </div>
                        </Card>
                        <h2 style={{ textAlign: 'center', marginTop: '1rem' }}>
                            {isLogin ? "Not registered yet?" : "Already have an account?"}
                            &nbsp;
                            <a
                                onClick={toggleAuth}
                            >
                                {isLogin ? "Register" : "Login"}
                            </a>
                        </h2>
                    </div>
                </div>
            )}
        </>
    )
}

export default Auth
