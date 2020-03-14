import Axios from './Helper';
import Fixtures from '../Fixture';

// get all users.
export const getAllUsersRequest = async () => {
  // try {
  //   var config = {
  //     headers: { 'Access-Control-Allow-Origin': '*', crossDomain: true }
  //   };
  //   const response = await Axios.get('https://webhook.site/197824f4-45a1-4395-8179-f815b2850f27', config);
  //   return response;
  // } catch (error) {
  //   console.log('ERor', error.response);
  //   return error;
  // }
  return Promise.resolve({ data: Fixtures });
};

// send generic users list
export const sendGenericUsersListRequest = async (list) => {
  try {
    const response = await Axios.post(list);
    return response;
  } catch (error) {
    return error;
  }
};

// send specific users list
export const sendSpecificUsersListRequest = async (list) => {
  try {
    const response = await Axios.post(list);
    return response;
  } catch (error) {
    return error;
  }
};
