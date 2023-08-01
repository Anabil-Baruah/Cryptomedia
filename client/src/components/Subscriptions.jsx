import React from 'react'
import { Row, Col, Card, Typography, Button, Table } from 'antd'
import { dataSource, columns } from './modals/data'


function Subscriptions() {

    return (
        <div className='subscription-hero'>
            <div className='subscriptions'>
                <Typography.Text type="secondary">
                    Subscription Plans
                </Typography.Text>
                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={12} md={8}>
                        <Card className='subscription-card card'>
                            <Typography.Text type="secondary"
                                style={{ fontSize: '40px', whiteSpace: 'nowrap', color: 'var(--text-primary)' }}
                            >Pro</Typography.Text>
                            <p>Distraction-free trading and investing, with more charts, intervals and indicators</p>
                            <div className="price">
                                <div className="heading">
                                    <h1 style={{ fontSize: '30px' }}>$9.99 </h1>/month
                                </div>
                                <Button type="primary">Try free for 30 days</Button>
                            </div>
                            <li>- Ad. free</li>
                            <li>- 5 indicators per chart</li>
                            <li>- 2 charts in one layout</li>
                            <li>- 20 active price alerts</li>
                            <li>- 20 active technical alerts on indicators, strategies, or drawings</li>
                            <li>- Volume profile indicators</li>
                            <li>- Custom time intervals</li>

                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <Card className='subscription-card card'>
                            <Typography.Text type="secondary"
                                style={{ fontSize: '40px', color: 'var(--text-primary)' }}
                            >Pro+</Typography.Text>
                            <p>Intraday technical analysis for day traders looking to take things to the next level</p>
                            <div className="price">
                                <div className="heading">
                                    <h1 style={{ fontSize: '30px' }}>$19.99 </h1>/month
                                </div>
                                <Button type="primary">Try free for 30 days</Button>
                            </div>
                            <li>- Ad. free</li>
                            <li>- 10 indicators per chart</li>
                            <li>- 4 charts in one layout</li>
                            <li>- 100 active price alerts</li>
                            <li>- 100 active technical alerts on indicators, strategies, or drawings</li>
                            <li>- Intraday exotic charts</li>
                            <li>- Charts based on custom formulas</li>

                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <Card className='subscription-card card'>
                            <Typography.Text type="secondary"
                                style={{ fontSize: '40px', whiteSpace: 'nowrap', color: 'var(--text-primary)' }}
                            >Premium</Typography.Text>
                            <p>Highest precision and maximum data to capture all possible opportunities</p>
                            <div className="price">
                                <div className="heading">
                                    <h1 style={{ fontSize: '30px' }}>$49.99 </h1>/month
                                </div>
                                <Button type="primary">Try free for 30 days</Button>
                            </div>
                            <li>- Ad. free</li>
                            <li>- 20 indicators per chart</li>
                            <li>- 20 charts in one layout</li>
                            <li>- 400 active price alerts</li>
                            <li>- 400 active technical alerts on indicators, strategies, or drawings</li>
                            <li>- Unlimited saved chart layouts</li>
                            <li>- Alerts that don't expire</li>

                        </Card>
                    </Col>
                </Row>
            </div>
            <div className="comparision-table" style={{ marginTop: '3rem' }}>
                <Typography.Text type="secondary">
                    Compare Plans
                </Typography.Text>
                <Table dataSource={dataSource} columns={columns} />;
            </div>
        </div>
    )
}

export default Subscriptions
