import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ASYNC_CONST, REQUEST_METHODS} from './constants';

const {POST, GET, PUT, PATCH, DELETE} = REQUEST_METHODS;

const getToken = async () => {
  const token = await AsyncStorage.getItem(ASYNC_CONST.accessToken);
  return token || '';
};

export const api = async (
  url: string,
  {fullUrl = '', method = 'GET', params = {}, headers = {}},
) => {
  const axiosUrl = fullUrl + url;
  const axiosMethod = method.toUpperCase();
  const accessToken = await getToken();
  const token = accessToken;
  const authHeader = {Authorization: `Bearer ${token}`};
  const axiosHeader = {...headers, ...authHeader};
  const axiosRef = axios.create({
    method: axiosMethod,
    url: axiosUrl,
    data: params,
    headers: axiosHeader,
  });

  console.log('axiosUrl', axiosUrl);

  let apiCall: Promise<any>;
  switch (axiosMethod) {
    case POST:
      apiCall = axiosRef.post(axiosUrl, params);
      break;

    case GET:
      apiCall = axiosRef.get(axiosUrl, params);
      break;

    case PUT:
      apiCall = axiosRef.put(axiosUrl, params);
      break;

    case PATCH:
      apiCall = axiosRef.patch(axiosUrl, params);
      break;

    case DELETE:
      apiCall = axiosRef.delete(axiosUrl, {data: params});
      break;

    default:
      apiCall = axiosRef.get(axiosUrl, params);
      break;
  }

  return new Promise((resolve, reject) =>
    apiCall
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      }),
  );
};

export default api;
