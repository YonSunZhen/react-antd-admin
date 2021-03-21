import { HOST_URL } from '../host-url';
import axios from 'axios';
import { Response } from '../response.types';
import { TestResponse, TestParams } from './test.types';

const _baseUrl = `${HOST_URL}/test`;

export async function getTestData(params?: TestParams) {  
  const res = await axios.get<Response<TestResponse[]>>(_baseUrl, {params});
  return res.data;
}
