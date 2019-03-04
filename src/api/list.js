import axios from 'axios';
import qs from 'qs';

const instance = axios.create({
  withCredentials: true
});

const ONE = 1;
const TWENTY = 20;

export const getHistoryUpList = (pageNum = ONE, pageSize = TWENTY) =>
  instance.post(`/picbed/user/history`, qs.stringify({ pageNum, pageSize }));