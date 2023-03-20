

import axios from 'axios';
import https from 'https';
import { WP_LOFIN_URL_AUTH } from '../../utils/enpoints/endponts';

const agent = new https.Agent({
  rejectUnauthorized: true,
});

export const getTokenForLogin = async (email, password) => {
  try {
    const response = await axios.post(WP_LOFIN_URL_AUTH, {
      email: email,password: password, authkey: "abc123",
    }, {
      headers: { 'Content-Type': 'application/json', },
      httpsAgent: agent,
    });

    const token = response.data;
    return response;
  } catch (error) {
    return false;
  }
}





//             {email: "ormizrahi1610@gmail.com",password: "r2u7X+AWn9QdkTC", authkey: "abc123"},












