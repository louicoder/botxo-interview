import Axios from './Helper';
import Fixtures from '../Fixture';

// get all users.
export const getAllUsersRequest = async () => {
  // try {
  //   const response = await Axios.get();
  //   return response;
  // } catch (error) {
  //   console.log('ERor', error.response);
  //   return error;
  // }
  // await fetch('https://webhook.site/197824f4-45a1-4395-8179-f815b2850f27', {
  //   mode: 'no-cors',
  //   method: 'GET',
  //   headers: {
  //     'Access-Control-Allow-Origin': '*'
  //   }
  // })
  //   .then((response) => {
  //     console.log('REsponse from fetch', JSON.stringify(response));
  //     return response.json();
  //   })
  //   .catch((error) => error);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({ data: Fixtures });
    }, 5000);
  });
};

// send generic users list
export const sendDataSortedByName = async (list) => {
  try {
    const response = await Axios.post(list);
    return response;
  } catch (error) {
    return error;
  }
};

// send specific users list
export const sendDataSortedByAge = async (list) => {
  try {
    const response = await Axios.post(list);
    return response;
  } catch (error) {
    return error;
  }
};
