import { Button, Modal, Form, Input, Row, Col } from 'antd';


const PasswordChange = ({ isModalOpen, handleCancel, handleOk }) => {

    return (
        <>
            <Modal title="Change Password"
                footer={null}
                open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Form
                    style={{ width: '100%' }}
                >

                    <Form.Item name="PrevPassword" label="Password">
                        <Input.Password size='large' />
                    </Form.Item>

                    <Form.Item name="newPass" label="New Password">
                        <Input.Password size='large' />
                    </Form.Item>

                    <Form.Item style={{ textAlign: 'center' }} >
                        <Row justify="center">
                            <Col>
                                <Button
                                    type="default"
                                    size="large"
                                    style={{ borderRadius: '2px', }}
                                >
                                    Reset
                                </Button>
                            </Col>
                        </Row>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};
export default PasswordChange;