import constants from './Web3.Constants';

const actions = {
  setWeb3: (web3) => async (dispatch) => {
    try {
      dispatch({
        type: constants.SET_WEB3,
        payload: web3,
      });
    } catch (error) {
      dispatch({
        type: constants.SET_WEB3_ERROR,
        payload: null,
      });
    }
  },

};
export default actions;
