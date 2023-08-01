import React, { useState } from 'react'
import { Form, Input, Button, Image, Card, Row, Col } from 'antd'
import Divider from './HorizontaLine '
import Loader from './Loader'
import login from '../images/ai.png'
import google from '../images/google.png'


function SignUp({ isLogin, onFinish }) {
    return (
        <Form
            onFinish={onFinish}
            style={{ width: '100%' }}
        >

            <Form.Item name="username" label="Name">
                <Input size='large' />
            </Form.Item>

            <Form.Item name="email" label="Email">
                <Input size='large' />
            </Form.Item>

            <Form.Item name="password" label="Set your password">
                <Input.Password size='large' />
            </Form.Item>

            <Form.Item name="password" label="Retype password">
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

function Login({ isLogin, onFinish }) {

    return (
        <Form
            onFinish={onFinish}
            style={{ width: '100%' }}
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


    const toggleAuth = () => {
        setLogin(!isLogin)
    }

    const handleFormSubmit = (values) => {
        // setLoading(true)

        console.log(values)
        const apiUrl = isLogin ? '/api/login' : '/api/signup';
        axios.post(apiUrl, values)
            .then(response => {
                // Handle successful response
                console.log('Response:', response);
                message.success('User registered successfully!');
            })
            .catch(error => {
                // Handle error
                console.error('Error:', error);
                message.error('Error registering user.');
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return (
        <>
            <Loader loading={loading} />
            {!loading && (
                <div className="login">
                    <div
                        className="login__image"
                        style={{ width: '100%', height: '100%' }}
                    >
                        <Image src={login} alt='login' preview={false} />
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
                                {isLogin ? <Login isLogin={isLogin} onFinish={handleFormSubmit} /> : <SignUp isLogin={isLogin} onFinish={handleFormSubmit} />}
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
