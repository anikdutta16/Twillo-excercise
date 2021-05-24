const axios = require('axios');
const {getUserFriendDetail} = require('../facades/userfriend.facade');
const {getUserPlaysDetail} = require('../facades/userplay.facade');
// {
//   "username": "joe_example",
//   "plays": 178,
//   "friends": 7,
//   "tracks": [
//   "E75C38C1-E2BB-BAF6-620B-9255D035B693",
//   "68B4D809-4B4F-F735-EB92-E5B17C99220B"
//   ],
//   "uri": "/users/joe_example"
//  }

const getUserById = async (userId) => {
  const response = {
    username: userId,
    uri: `/users/${userId}`
  }
  try{
    const [friends, plays] = await Promise.all([getUserFriendDetail(userId), getUserPlaysDetail(userId)])
    return {
      ...response,
      plays: plays.length,
      friends: friends.length,
      tracks: [...plays]
    }
  }catch(err){
    // Splunk logging in real scenario using pino/winston etc.
    console.error(`Data not found for the user id ${userId}`)
  }
};


module.exports = {
  getUserById,
};
