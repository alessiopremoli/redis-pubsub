// eslint-disable-next-line @typescript-eslint/no-var-requires
const Redis = require('ioredis');

const pub = new Redis({
  host: 'localhost',
  port: 6379,
});

setInterval(() => {
  const channelOne = 'channel-one';
  const channelOneMessage = 'message-one';

  const channelTwo = 'channel-two';
  const channelTwoMessage = 'message-two';

  pub.publish(channelOne, JSON.stringify(channelOneMessage));
  pub.publish(channelTwo, JSON.stringify(channelTwoMessage));

  console.log('Published:', channelOneMessage, channelTwoMessage);
}, 1000);
