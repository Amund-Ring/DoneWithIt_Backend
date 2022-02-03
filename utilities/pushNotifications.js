const sendPushNotification = async (expoPushToken, message) => {
  const message1 = {
    to: expoPushToken,
    sound: 'default',
    title: 'Original Title',
    body: message,
    data: { someData: 'goes here' }
  };

  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(message1)
  });
}

module.exports = sendPushNotification;
