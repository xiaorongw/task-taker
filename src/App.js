import React from 'react';
import './App.css';
import Main from './components/MainComponent'
import 'react-dates/initialize';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import { PersistGate } from 'redux-persist/integration/react';

const {store, persistor} = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Main />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
