import React, { useEffect, useState } from 'react';
import { Col, Row, Card } from 'antd';
import { useGetFavouritesQuery } from '../services/cryptoApi'
import { StarFilled, DeleteOutlined } from '@ant-design/icons';
import Loader from './Loader';
import millify from 'millify'
import axios from '../services/axios'

function Favourites() {
  const [favourites, setFavoutites] = useState([])
  useEffect(() => {
    axios.get('/api/favourites')
      .then((response) => {
        console.log(response.data)
        setFavoutites(response.data.favourites);
      })
      .catch((error) => {
        console.log(error)
      })

  }, [])



  const { data: filteredCryptos, isFetching } = useGetFavouritesQuery(favourites);
  const cryptos = filteredCryptos?.data.coins
  // console.log(filteredCryptos)
  if (isFetching) return <Loader loading={true} />;
  return (
    <div style={{height:'100vh'}}>
      <Row gutter={[16, 16]}>
        {cryptos?.map((currency) => (
          <Col xs={24} sm={12} md={8} lg={6} key={currency?.id}>
            <Card
              className='card'
              style={{ borderRadius: '4px', height: '100%', margin: '10px 0' }}
              hoverable
            >
              <img className='crypto-image'
                style={{ width: '30px', height: '30px' }}
                src={currency?.iconUrl} />
              <StarFilled
                style={{ float: 'right', color: 'yellow', fontSize: 'large' }}
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
