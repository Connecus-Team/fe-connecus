import axiosClient from './axios';

const userAPI = {
  postFunding: (params) => {
    const url = '/ceus/funding';
    return axiosClient.post(url, params);
  },
  postTask: (params) => {
    const url = '/ceus/task';
    return axiosClient.post(url, params);
  },
  postVoting: (params) => {
    const url = '/users/voting';
    return axiosClient.post(url, params);
  },
};

export default userAPI;
