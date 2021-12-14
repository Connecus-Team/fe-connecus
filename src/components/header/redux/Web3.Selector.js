import {createSelector} from 'reselect';

const selectRaw = (state) => state.web3;

const selectWeb3 = createSelector(
    [selectRaw],
    (web3) => web3.web3,
);
const selectors = {
  selectWeb3,
};

export default selectors;
