import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import web3 from '../components/header/redux/Web3.Reducer';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    web3,
  });
