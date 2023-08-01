import React from 'react'
import { Col, Row, Form, Input, Button, Upload, Checkbox } from 'antd'
import { UploadOutlined, CloseOutlined } from '@ant-design/icons'
import anonymousImg from "../images/anonymous.png"

function EditProfile() {
    const onFinish = (values) => {
        console.log('Form values:', values);
    };

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
    return (
        <div>
            <div className="edit-profile-container">
                <Row gutter={16}>
                    <Col xs={24} lg={12}>
                        <div className="box basic-info">
                            <div className="box-header-basic-info">Basic Info</div>
                            <div className="box-content-basic-info">
                                <Form layout="vertical" onFinish={onFinish}>
                                    <Form.Item
                                        label={
                                            <span style={{ color: 'var(--text-primary)' }}>Name</span>
                                          }
                                        name="name"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please enter your name',
                                            },
                                            {
                                                validator: validateName,
                                            }
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                        label={<span style={{ color: 'var(--text-primary)' }}>Profile Tagline</span>}
                                        name="Tagline"
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                        label="Profile Image"
                                        name="PrifileImg"
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
                                </Form>
                            </div>
                            <div className="box-header-basic-info">About You</div>
                            <div className="box-content-about">
                                <Form layout="vertical" onFinish={onFinish}>
                                    <Form.Item
                                        label={<span style={{ color: 'var(--text-primary)' }}>Profile Bio</span>}
                                        name="profileBio"
                                    >
                                        <Input.TextArea rows={4} />
                                    </Form.Item>
                                    <Form.Item
                                        label={<span style={{ color: 'var(--text-primary)' }}>Tech stack</span>}
                                        name="techStack"
                                    >
                                        <Input placeholder='Search technology, topics, more...' />
                                    </Form.Item>
                                    <div className="display-tech-stack">
                                        <div className="tech"><span>Node JS </span><CloseOutlined /></div>
                                        <div className="tech"><span>React JS</span> <CloseOutlined /></div>
                                        <div className="tech"><span>Figma </span><CloseOutlined /></div>
                                        <div className="tech"><span>Adobe XD </span><CloseOutlined /></div>
                                    </div>
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
                                <Form layout="vertical" onFinish={onFinish}>
                                    <Form.Item
                                       label={<span style={{ color: 'var(--text-primary)' }}>Twitter profile</span>}
                                        name="twitter"
                                        rules={[
                                            {
                                                validator: validateURL,
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
                                                validator: validateURL,
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
                                                validator: validateURL,
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
                                                validator: validateURL,
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
                                                validator: validateURL,
                                            }
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Form>
                            </div>
                            <div className="box-header-socials">Profile Identity</div>
                            <div className="box-content-profile-identity">
                                <Form layout="vertical" onFinish={onFinish}>
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
                                </Form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default EditProfile
