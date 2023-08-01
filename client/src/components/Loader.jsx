import React from 'react';
import { Spin } from 'antd';

const Loader = ({ loading }) => (
  <>
    {loading && (
      <div className="loader">
        <Spin />
      </div>
    )}
  </>
);

export default Loader;