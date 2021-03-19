import { HOST_URL } from '../host-url';
import axios from 'axios';
import { Response } from '../response.types';
import { TestResponse } from './test.types';

const _baseUrl = `${HOST_URL}/test`;

export async function getTestData() {  
  const res = await axios.get<Response<TestResponse[]>>(_baseUrl);
  return res.data;
}
