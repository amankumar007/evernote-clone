import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore,applyMiddleware,compose } from "redux";
import rootReducer from './store/reducers/rootReducers';
import { Provider } from 'react-redux';
import firebase from 'firebase/app';
import {ReactReduxFirebaseProvider,getFirebase} from 'react-redux-firebase';
import thunk from "redux-thunk";
import { createFirestoreInstance, getFirestore,reduxFirestore } from 'redux-firestore'
import firebaseConfig from "./Configuration/configfirebase"

const store = createStore(rootReducer,compose(
  applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
    reduxFirestore(firebaseConfig))
  
  );

  const firebaseProps = {
  firebase,
  config: firebaseConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
}

ReactDOM.render(
  <Provider  store={store}>
  <ReactReduxFirebaseProvider {...firebaseProps}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root') 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
