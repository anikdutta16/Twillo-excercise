const axios = require('axios');
const PLAYS_DETAIL_ENDPOINT = 'https://mauvelous-leopard-5257.twil.io/plays-detail?username=';

const getUserPlaysDetail = async (userId) => {
    try{
      const playsDetail = await axios(`${PLAYS_DETAIL_ENDPOINT}${userId}`);
      return playsDetail.data.plays
    }catch(err){
      // Splunk logging in real scenario
      console.error(`Data not found for the user id ${userId}`)
    }
} 

module.exports = {getUserPlaysDetail};
