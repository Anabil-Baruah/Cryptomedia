import React, { useEffect, useState } from 'react';
import { Col, Row, Card, message } from 'antd';
import { useGetFavouritesQuery } from '../../services/cryptoApi';
import { StarFilled, DeleteOutlined } from '@ant-design/icons';
import Loader from '../Loader';
import millify from 'millify';
import axios from '../../services/axios';

function CryptoCard({ currency }) {
  return (
    <Col xs={24} sm={12} md={8} lg={6}>
      <Card
        className='card'
        style={{ borderRadius: '4px', height: '100%', margin: '10px 0' }}
        hoverable
      >
        <img
          className='crypto-image'
          style={{ width: '30px', height: '30px' }}
          src={currency?.iconUrl}
          alt={currency?.name}
        />
        <StarFilled
          style={{ float: 'right', color: 'yellow', fontSize: 'large' }}
        />
        <h1>{currency?.name}</h1>
        <p>Price: {millify(currency?.price)}</p>
        <p>Daily change: {millify(currency?.change)}%</p>
      </Card>
    </Col>
  );
}

function Favourites() {
  const [favourites, setFavourites] = useState([]);
  const { data: filteredCryptos, isFetching, isError } = useGetFavouritesQuery(
    favourites
  );

  useEffect(() => {
    axios
      .get('/api/favourites')
      .then((response) => {
        console.log(response.data);
        setFavourites(response.data.favourites);
      })
      .catch((error) => {
        console.error(error);
        message.error('Failed to fetch favorites');
      });
  }, []);

  if (isFetching) {
    return <Loader loading={true} />;
  }

  if (isError) {
    // Handle the error condition here, show an error message or take appropriate action
    return <Loader loading={true} />;
  }

  return (
    <div style={{ height: '100vh' }}>
      <Row gutter={[16, 16]}>
        {filteredCryptos?.data?.coins?.map((currency) => (
          <CryptoCard key={currency?.id} currency={currency} />
        ))}
      </Row>
    </div>
  );
}

export default Favourites;
