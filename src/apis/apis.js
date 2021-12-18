import axiosClient from './axios';

const userAPI = {
  // {GET API}
  getFunding: (params) => {
    const url = '/ceus/funding';
    return axiosClient.get(url, {params});
  },
  getTask: (params) => {
    const url = '/ceus/task';
    return axiosClient.get(url, {params});
  },
  getVoting: (params) => {
    const url = '/ceus/voting';
    return axiosClient.get(url, {params});
  },
  getAllToken: (params) => {
    const url = '/ceus/all-token';
    return axiosClient.get(url, params);
  },
  getTokenInfo: (params) => {
    const url = '/ceus/token';
    return axiosClient.get(url, {params});
  },

  // {POST API}
  postFunding: (params) => {
    const url = '/ceus/funding';
    return axiosClient.post(url, params);
  },
  postTask: (params) => {
    const url = '/ceus/task';
    return axiosClient.post(url, params);
  },
  postVoting: (params) => {
    const url = '/ceus/voting';
    return axiosClient.post(url, params);
  },
  postToken: (params) => {
    const url = '/ceus/token';
    return axiosClient.post(url, params);
  },
};

export default userAPI;
