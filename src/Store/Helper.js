import Axios from 'axios';

const baseURL = 'https://webhook.site/197824f4-45a1-4395-8179-f815b2850f27';

export default Axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*'
  }
});
