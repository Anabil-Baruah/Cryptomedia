import React, { useEffect, useState } from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic, Card } from 'antd'
import { useGetCryptosQuery } from '../../services/cryptoApi'
import { Cryptocurrencies, TopNavbar } from '../index.js'
import News from '../news/News'
import { Link } from 'react-router-dom'
import Loader from '../Loader';
import axios from 'axios'

const { Title } = Typography
function Homepage() {
  const { data, isFetching } = useGetCryptosQuery(10)
  const globalStats = data?.data?.stats

  if (isFetching) return <Loader loading={true} />;




  return (
    <div>
      <Title level={2} className='heading'>Global Crypto Stats</Title>
      <div className='crypto-header-card-info'>
        <Row>
          <Col span={12}><Statistic title={<span className="title">Total Cryptocurrencies</span>} value={globalStats?.total} /></Col>
          <Col span={12}><Statistic title={<span className="title">Total Exchanges</span>} value={millify(globalStats?.totalExchanges)} /></Col>
          <Col span={12}><Statistic title={<span className="title">Total market cap</span>} value={millify(globalStats?.totalMarketCap)} /></Col>
          <Col span={12}><Statistic title={<span className="title">Total 24hr volume</span>} value={millify(globalStats?.total24hVolume)} /></Col>
          <Col span={12}><Statistic title={<span className="title">Total Market</span>} value={millify(globalStats?.totalMarkets)} /></Col>
        </Row>
      </div>
      <div className="home-heading-container">
        <Title level={2} className='home-title' >Top 10 cryptocurrencies in the world</Title>

      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className='home-title' >Latest crypto news</Title>

      </div>
      <News simplified />
    </div>
  )
}

export default Homepage
