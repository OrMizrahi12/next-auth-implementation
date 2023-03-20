

import axios from 'axios';
import https from 'https';
import { WP_REGISTER_URL_AUTH, AUTH_KEY } from '../../utils/enpoints/endponts';


const agent = new https.Agent({
  rejectUnauthorized: false, // Set this to true in production
});


export const registerUser = async (email, password) => {
  try {
    const response = await axios.post(WP_REGISTER_URL_AUTH, {
      email: email,
      password: password,
      authkey: 'abc123',
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
      httpsAgent: agent, 
    });

    const { data } = response;
    return data;
  } catch (error) {
    console.error('Registration failed', error);
    return error;
  }
};
