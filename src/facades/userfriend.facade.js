const axios = require('axios');
const USER_FRIENDS_LIST_ENDPOINT = 'https://mauvelous-leopard-5257.twil.io/friend-detail?username=';

const getUserFriendDetail = async (userId) => {
    try{
      const friendsDetail = await axios(`${USER_FRIENDS_LIST_ENDPOINT}${userId}`);
      return friendsDetail.data.friends
    }catch(err){
      // Splunk logging in real scenario
      console.error(`Data not found for the user id ${userId}`)
    }
}

module.exports = {getUserFriendDetail};

