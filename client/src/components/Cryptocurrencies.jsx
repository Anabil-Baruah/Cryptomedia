import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input, Typography } from 'antd'
import { useGetCryptosQuery } from '../services/cryptoApi'
import millify from 'millify'
import Loader from './Loader'
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';

function Cryptocurrencies({ simplified }) {
  const count = simplified ? 10 : 100
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count)
  const [cryptos, setCryptos] = useState([]);
  const [search, setSearch] = useState('')


  useEffect(() => {
    const filterData = cryptoList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()))
    setCryptos(filterData)
  }, [cryptoList, search])



  if (isFetching) return <Loader loading={true} />;




  return (
    <div>
      {!simplified && (
        <div className="search-crypto">
          <Input placeholder='Search Crypto' onChange={(e) => setSearch(e.target.value)} />
        </div>
      )}
      <Row gutter={[32, 32]} className='crypto-card-container'>
        {
          cryptos?.map((currency) => (
            <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency?.id}>
              <Link to={`/crypto/${currency?.uuid}`}>

                <Card
                  className='card'
                  title={`${currency?.rank}. ${currency?.name}`}
                  extra={<img className='crypto-image' src={currency?.iconUrl} />}
                  hoverable
                >
                  <p>Price:  &nbsp;{millify(currency?.price)}</p>
                  <p>Market: &nbsp; {millify(currency?.marketCap)}</p>
                  <p>Daily change:
                    &nbsp;
                    {millify(currency?.change)}%
                    &nbsp;
                    {currency?.change > 0 ?
                      <CaretUpOutlined style={{ color: 'lightgreen' }} /> :
                      <CaretDownOutlined style={{ color: 'red' }} />}
                  </p>

                </Card>

              </Link>
            </Col>
          ))
        }
        {simplified && (
          <Card className='card' hoverable style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}>
            <Typography.Text type="secondary" style={{ fontSize: '40px' }}>
              <Link to="/cryptocurrencies" style={{ textDecoration: 'none' }}>
                Show more +
              </Link>
            </Typography.Text>
          </Card>
        )}

      </Row>
    </div>
  )
}

export default Cryptocurrencies
