module.exports = async () => {
  const Tweet = require('./models/Tweet');
  const User = require('./models/User');

  User.hasMany(Tweet, { as: 'tweets', foreignKey: 'userID' });
  Tweet.belongsTo(User, { as: 'User', foreignKey: 'userID' });

  const errHandler = err => {
    console.error('Error: ', err);
  };

  const user = await User.create({
    Username: 'raynemani',
    passwd: '123456789'
  }).catch(errHandler);

  const tweet = await Tweet.create({
    content:
      'This is actually the tweet content Tweeted from OnePlus 6',
    UserID: user.id
  }).catch(errHandler);

  const users = await User.findAll({
    where: { username: 'raynemani' },
    include: [{ model: Tweet, as: 'Tweets' }]
  }).catch(errHandler);

  console.log('raynemani Tweets: ', users);
};
