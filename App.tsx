import * as React from 'react';
import Navigator from './src/navigation/Navigator';
import { Provider } from "react-redux"
import { setupStore } from './src/store/store';

const store = setupStore();

export default function App() {
  return (
    <Provider store={store}>
      <Navigator/>
    </Provider>
  );
}