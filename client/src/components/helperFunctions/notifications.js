// notificationManager.js

import { notification } from 'antd';
import React from 'react';

const useNotificationManager = () => {
  const [api, contextHolder] = notification.useNotification();
  
  const showNotification = (placement, message) => {
    api[message.type]({
      message: message.message.header,
      description: message.message.desc,
      placement,
      duration: 3
    });
  };

  return { showNotification, contextHolder };
};

export default useNotificationManager;
