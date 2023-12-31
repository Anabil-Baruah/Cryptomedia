import React, { useEffect, useState } from 'react'
import HTMLReactParser from 'html-react-parser'
import millify from 'millify'
import { useParams } from 'react-router-dom'
import { Col, Row, Typography, Select, Button, message } from 'antd'
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';
import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from '../../services/cryptoApi'
import LineChart from '../LineChart'
import Loader from '../Loader';
import axios from '../../services/axios'
import useAuth from '../../hooks/useAuth'

const { Title, Text } = Typography
const { Option } = Select


function CryptoDetails() {


  const { coinId } = useParams()
  const [timePeriod, setTimePeriod] = useState('7d')
  const [addCoinbtn, setAddCoinbtn] = useState(false)
  const [btnTxt, setBtnTxt] = useState('Add to favourits')
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId)
  const { data: coinHistory } = useGetCryptoHistoryQuery({ coinId, timePeriod })
  const { auth } = useAuth()

  const isLogin = auth.accessToken ? true : false

  useEffect(() => {
    axios.get('/api/favourites')
      .then((res) => {
        if (res.data.favourites.includes(coinId))
          setAddCoinbtn(true)
        setBtnTxt('Remove from favourits')
      })
  })


  if (isFetching) return <Loader loading={true} />
  const cryptoDetails = data?.data?.coin

  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];
  const toggleFavSelect = (id, btnState) => {
    console.log(btnState)
    if (!btnState) {
      axios.post('/api/favourites', { id })
        .then((response) => {
          if (response.status == 200) {
            message.success(response.data.message)
          } else {
            message.error(`${message.data.message}`)
          }
        }).catch((error) => {
          console.log(error)
          message.error('Server error')
        })
    } else {
      axios.delete(`/api/favourites/${id}`)
        .then((response) => {
          if (response.status == 200) {
            message.success(response.data.message)
          } else {
            message.error(`${message.data.message}`)
          }
        }).catch((error) => {
          console.log(error)
          message.error('Server error')
        })
    }
  }

  const stats = [
    { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <DollarCircleOutlined /> },
    { title: 'Rank', value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    { title: '24h Volume', value: `$ ${cryptoDetails?.['24hVolume'] && millify(cryptoDetails?.['24hVolume'])}`, icon: <ThunderboltOutlined /> },
    { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <DollarCircleOutlined /> },
    { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <TrophyOutlined /> },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <FundOutlined /> },
    { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
    { title: 'Aprroved Supply', value: cryptoDetails?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
    { title: 'Total Supply', value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}`, icon: <ExclamationCircleOutlined /> },
    { title: 'Circulating Supply', value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}`, icon: <ExclamationCircleOutlined /> },
  ];

  return (
    <div>
      <Col className='coin-detail-container'>
        <Col className='coin-heading-container'>
          <Title level={2} className='coin-name'>
            {cryptoDetails?.name} ({cryptoDetails?.symbol}) Price
          </Title>
          <p>
            {cryptoDetails?.name} live price in US dollars.
          </p>
        </Col>
        <Row className='add-to-fav'>
          {isLogin && (<Button
            type="primary"
            // danger={addCoinbtn == "danger" ? true : false}
            {...(addCoinbtn ? { danger: true } : {})}
            onClick={() => {
              toggleFavSelect(cryptoDetails?.uuid, addCoinbtn),
                setAddCoinbtn(!addCoinbtn),
                setBtnTxt(addCoinbtn ? 'Add to favourits' : 'Remove from favourits')
            }}
          >{btnTxt}</Button>)}

        </Row>
        <select
          defaultValue="7d"
          className="select-timeperiod"
          onChange={(e) => setTimePeriod(e.target.value)}
        >
          {time.map((date) => (
            <option key={date} value={date}>
              {date}
            </option>
          ))}
        </select>

        <div className="card hover-off coin-graph">

          <LineChart coinHistory={coinHistory}
            currentPrice={millify(cryptoDetails?.price)}
            coinName={cryptoDetails?.name}
          /></div>
        <Col className='stats-container'>
          <Col className='coin-value-statistics'>
            <Col className='coin-value statistics-heading'>
              <Title level={3} className='coin-details-heading'>
                {cryptoDetails?.name} value statistics
              </Title>
              <p>
                An overview showing the stats of crypto details {cryptoDetails?.name}
              </p>
            </Col>
            {
              stats.map(({ icon, title, value }) => (
                <Col className='coin-stats'>
                  <Col className='coin-stats-name'>
                    <Text style={{ color: 'var(--text-primary)' }}>{icon}</Text>
                    <Text style={{ color: 'var(--text-primary)' }}>{title}</Text>
                  </Col>
                  <Text className='stats' style={{ color: 'var(--text-primary)' }}>{value}</Text>
                </Col>
              ))
            }
          </Col>
          <Col className='other-stats-info'>
            <Col className='coin-value statistics-heading'>
              <Title level={3} className='coin-details-heading'>
                Other statistics
              </Title>
              <p>
                An overview showing the ststs of all cryptocurrencies
              </p>
            </Col>
            {
              genericStats.map(({ icon, title, value }) => (
                <Col className='coin-stats'>
                  <Col className='coin-stats-name'>
                    <Text style={{ color: 'var(--text-primary)' }}>{icon}</Text>
                    <Text style={{ color: 'var(--text-primary)' }}>{title}</Text>
                  </Col>
                  <Text className='stats' style={{ color: 'var(--text-primary)' }}>{value}</Text>
                </Col>
              ))
            }
          </Col>
        </Col>
        <Col className='coin-desc-link'>
          <Row className='coin-desc' style={{ display: 'flex' }}>
            <Title level={3} className='coin-details-heading'>
              What is {cryptoDetails?.name}
              <p
                style={{ marginTop: '1rem' }}
              >{cryptoDetails?.description}</p>
            </Title>
            {/* {HTMLReactParser(cryptoDetails?.description)} */}
          </Row>
          <Col className='coin-links'>
            <Title level={3} className='coin-details-heading'
            >
              {cryptoDetails?.name} Links
            </Title>
            {
              cryptoDetails?.links.map((link) => (
                <Row className='coin-link' key={link.name}>
                  <Title level={5} style={{ color: 'var(--text-primary)' }} className='link-name'>
                    {link.type}
                  </Title>
                  <a href={link.url} target="_blank" rel='norefer'>{link.name}</a>
                </Row>
              ))
            }
          </Col>
        </Col>
      </Col>
    </div>
  )
}

export default CryptoDetails
