import './assets/css/plugins/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css';
import './assets/scss/style.scss';
import {Provider} from 'react-redux';
import {configStore, getHistory} from './store/config';
import {ConnectedRouter} from 'connected-react-router';
import Snowfall from 'react-snowfall';
import Router from './Router/routes';
// import {SettingsContext} from './context/settings';
import React, {useEffect} from 'react';
const store = configStore();
function App() {
  // TODO: import error
  // useEffect(() => {
  //   window.onbeforeunload = function(event)
  //   {
  //     return confirm('Confirm refresh');
  //   };
  // }, []);
  return (
    <div className="App overflow-hidden">
      <Snowfall
        color={'#dee4fd'}
        snowflakeCount={200}
        radius={[0.5, 3.0]}
        speed={[0.5, 3.0]}
        wind={[-0.5, 2.0]}
      />
      <Provider store={store}>
        <ConnectedRouter history={getHistory()}>
          <Router />
        </ConnectedRouter>
      </Provider>
    </div>
  );
}

export default App;
