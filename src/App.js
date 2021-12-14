import './assets/css/plugins/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css';
import './assets/scss/style.scss';
import {Provider} from 'react-redux';
import {configStore, getHistory} from './store/config';
import {ConnectedRouter} from 'connected-react-router';
import Router from './Router/routes';

const store = configStore();
function App() {
  return (
    <div className="App overflow-hidden">
      <Provider store={store}>
        <ConnectedRouter history={getHistory()}>
          <Router />
        </ConnectedRouter>
      </Provider>
    </div>
  );
}

export default App;
