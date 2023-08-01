import React, { useEffect } from 'react';
import { Col, Row, Card } from 'antd';
import { useGetCryptosQuery } from '../services/cryptoApi'
import { StarFilled } from '@ant-design/icons';
import Loader from './Loader';
import millify from 'millify'

function Favourites() {
    const { data: cryptoList, isFetching } = useGetCryptosQuery(10)
    if (isFetching) return <Loader loading={true} />;
    const cryptos = cryptoList.data.coins
    return (
        <div>
        <Row gutter={[16, 16]}>
          {cryptos?.map((currency) => (
            <Col xs={24} sm={12} md={8} lg={6} key={currency?.id}>
              <Card
              className='card'
                style={{ borderRadius: '4px', height: '100%', margin: '10px 0' }}
                hoverable
              >
                <StarFilled  
                style={{float:'right', color: 'yellow', fontSize:'large'}}
                
                />
                <h1>{currency?.name}</h1>
                <p>Price: {millify(currency?.price)}</p>
                <p>Daily change: {millify(currency?.change)}%</p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
}

export default Favourites;
