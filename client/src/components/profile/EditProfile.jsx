import React, { useEffect } from 'react'
import './EditProfile.scss'
import { Col, Row, Form, Input, Button, Upload, Checkbox } from 'antd'
import { UploadOutlined, CloseOutlined } from '@ant-design/icons'
import anonymousImg from "../../images/anonymous.png"
import axios from '../../services/axios.js'
import useNotificationManager from '../helperFunctions/notifications';



function EditProfile() {
    const [form] = Form.useForm();
    const { showNotification, contextHolder } = useNotificationManager();

    useEffect(() => {
        axios.get('/api/editProfile')
            .then((response) => {
                form.setFieldsValue(response.data);
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    const validateName = (_, value) => {
        const words = value.trim().split(/\s+/);
        if (words.length > 3) {
            return Promise.reject('Name should not have more than 3 words');
        }
        for (let i = 0; i < words.length; i++) {
            if (words[i].length > 30) {
                return Promise.reject('Each word should not exceed 30 characters');
            }
        }
        return Promise.resolve();
    };

    const isUrlValid = (url) => {
        // Regular expression to validate URL format
        const urlPattern = /^(https?:\/\/)?[\da-z.-]+\.[a-z.]{2,6}[/\w .-]*\/?$/;
        return urlPattern.test(url);
    };

    const validateURL = (_, value) => {
        if (!isUrlValid(value)) {
            return Promise.reject('Please enter a valid URL');
        }
        return Promise.resolve();
    };

    const handleFormSubmit = (values) => {
        // let apiUrl = '/api/editProfile'
        // console.log(values)

        axios.post('/api/editProfile', values)
            .then(response => {
                showNotification('bottomRight', response.data)
               
            }).catch(error => {
                showNotification('bottomRight', response.data)
                
            })
    }

    return (
        <div>
            {contextHolder}
            <div className="edit-profile-container">
                <Form form={form} layout="vertical" onFinish={handleFormSubmit}>
                    <Row gutter={16}>
                        <Col xs={24} lg={12}>
                            <div className="box basic-info">
                                <div className="box-header-basic-info">Basic Info</div>
                                <div className="box-content-basic-info">
                                    <Form.Item
                                        label={
                                            <span style={{ color: 'var(--text-primary)' }}>Name</span>
                                        }
                                        name="name"
                                        rules={[
                                            // {
                                            //     required: true,
                                            //     message: 'Please enter your name',
                                            // },
                                            {
                                                validator: validateName,
                                            }
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                        label={<span style={{ color: 'var(--text-primary)' }}>Profile Tagline</span>}
                                        name="tagline"
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                        label="Profile Image"
                                        name="ProfileImg"
                                        valuePropName="fileList"
                                    >

                                        <Upload listType="picture">
                                            <Button icon={<UploadOutlined />}>Click to upload</Button>
                                        </Upload>
                                        <img
                                            src={anonymousImg}
                                            alt="" />
                                    </Form.Item>
                                    <Form.Item
                                        label={<span style={{ color: 'var(--text-primary)' }}>Location</span>}
                                        name="location"
                                    >
                                        <Input />
                                    </Form.Item>

                                </div>
                                <div className="box-header-basic-info">About You</div>
                                <div className="box-content-about">
                                    <Form layout="vertical">
                                        <Form.Item
                                            label={<span style={{ color: 'var(--text-primary)' }}>Profile Bio</span>}
                                            name="profileBio"
                                        >
                                            <Input.TextArea rows={4} />
                                        </Form.Item>
                                        <Form.Item
                                            label={<span style={{ color: 'var(--text-primary)' }}>Profile Bio</span>}
                                            name="profileBio"
                                        >
                                            <Input.TextArea rows={4} />
                                        </Form.Item>
                                    </Form>
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} lg={12}>
                            <div className="box socials">
                                <div className="box-header-socials">Socials</div>
                                <div className="box-content-socials">

                                    <Form.Item
                                        label={<span style={{ color: 'var(--text-primary)' }}>Twitter profile</span>}
                                        name="twitter"
                                        rules={[
                                            {
                                                // validator: validateURL,
                                            }
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                        label={<span style={{ color: 'var(--text-primary)' }}>Linkedin Profile</span>}
                                        name="linkedin"
                                        rules={[
                                            {
                                                // validator: validateURL,
                                            }
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                        label={<span style={{ color: 'var(--text-primary)' }}>Instagram Profile</span>}
                                        name="instagram"
                                        rules={[
                                            {
                                                // validator: validateURL,
                                            }
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                        label={<span style={{ color: 'var(--text-primary)' }}>Facebook Profile</span>}
                                        name="facebook"
                                        rules={[
                                            {
                                                // validator: validateURL,
                                            }
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                        label={<span style={{ color: 'var(--text-primary)' }}>Personal Website</span>}
                                        name="website"
                                        rules={[
                                            {
                                                // validator: validateURL,
                                            }
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>

                                </div>
                                <div className="box-header-socials">Profile Identity</div>
                                <div className="box-content-profile-identity">

                                    <Form.Item
                                        label={<span style={{ color: 'var(--text-primary)' }}>username</span>}
                                        name="username"
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                        label={<span style={{ color: 'var(--text-primary)' }}>Email Address</span>}
                                        name="email"
                                    >
                                        <Input />
                                        <Checkbox
                                            style={{ marginTop: '10px' }}
                                        > <span style={{ color: 'var(--text-primary)' }}>Show this email on your profile</span></Checkbox>
                                        <br />
                                        <i style={{ color: 'var(--text-primary)' }}>This will publicly show the email in your profile</i>
                                    </Form.Item>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className="edit-profile-btn">
                        <Button type="primary"
                            ghost
                            size='large'
                            htmlType="submit"
                        >Update</Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default EditProfile
