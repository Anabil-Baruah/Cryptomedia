import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
import { useGetCryptoNewsQuery } from '../../services/crytpoNewsApi'
import { useGetCryptosQuery } from '../../services/cryptoApi'
import moment from 'moment'
import Loader from '../Loader'

const { Text, Title } = Typography
const { Option } = Select
const demoImage = "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News"

function News({ simplified }) {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency')
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 7 : 16 })
  const { data } = useGetCryptosQuery(100)
  if (!cryptoNews?.value) return <Loader loading={true} />;

  console.log(data)
  return (
    <div>
      <Row gutter={[24, 24]}>
        {
          !simplified && (

            <Col span={24} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Select
                showSearch
                className='select-news'
                placeholder='Select a Crypto'
                optionFilterProp='children'
                onChange={(value) => setNewsCategory(value)}
                filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                disabled={simplified} // Disable the select if simplified prop is true
              >
                <Option value="Cryptocurency">Cryptocurrency</Option>
                {data?.data?.coins?.map((currency) => <Option value={currency.name} style={{ display: 'flex', justifyContent: 'center' }}>{currency.name}</Option>)}
              </Select>
            </Col>

          )
        }
        {
          cryptoNews?.value.map((news, index) => (
            <Col xs={24} sm={24} lg={8} key={index}>
              <Card hoverable className="card" style={{ height: '100%' }}>
                <a href={news.url} target="blank" rel="noreferrer">
                  <div className="news-header-container">
                    <img style={{ width: '150px', height: '150px', marginBottom: '1rem' }} src={news?.image?.thumbnail?.contentUrl || demoImage} alt="news" />
                    <Title className="news-title" style={{ color: 'var(--text-primary)' }} level={4}>{news.name}</Title>
                  </div>
                  <p className='news-desc' style={{ color: 'var(--text-primary)' }} >
                    {news.description > 100 ? `${news.description.substring(0, 100)}...` : news.description}
                  </p>
                  <div className="provider-container">
                    <div className='news-source'>
                      <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="avatar" />
                      <Text className="provider-name" style={{ color: 'var(--text-primary)' }}>{news.provider[0]?.name}</Text>
                    </div>
                    <div className="news-time">
                      <Text style={{ color: 'var(--text-primary)' }}>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                    </div>
                  </div>
                </a>
              </Card>
            </Col>
          ))
        }
        {simplified && (
          <Card hoverable style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxHeight: '10rem', marginTop: 'auto', marginBottom: 'auto', backgroundColor: 'transparent' }}>
            <Typography.Text type="secondary" style={{ fontSize: '40px' }}>
              <Link to="/news" style={{ textDecoration: 'none', color: 'var(--text-primary)' }}>
                Show more +
              </Link>
            </Typography.Text>
          </Card>
        )}
      </Row>
    </div>
  )
}

export default News
