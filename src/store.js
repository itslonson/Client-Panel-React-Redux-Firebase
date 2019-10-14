import firebase from "firebase/app";
import "firebase/firestore"; // <- needed if using firestore
import { createStore, combineReducers, compose } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { createFirestoreInstance, firestoreReducer } from "redux-firestore";

const fbConfig = {
  apiKey: "AIzaSyCpNhchb7MTEZxs7m0zLNF6x6UhHxnBTRw",
  authDomain: "react-client-panel-88093.firebaseapp.com",
  databaseURL: "https://react-client-panel-88093.firebaseio.com",
  projectId: "react-client-panel-88093",
  storageBucket: "react-client-panel-88093.appspot.com",
  messagingSenderId: "1074083194973",
  appId: "1:1074083194973:web:361c07fb6583b6860485b4",
  measurementId: "G-GRSGMH5H82"
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true
};

// Initialize firebase instance
firebase.initializeApp(fbConfig);

// Initialize other services on firebase instance
firebase.firestore();

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

// Create store with reducers and initial state
const initialState = {};
const store = createStore(
  rootReducer,
  initialState,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

export { store, rrfProps };
