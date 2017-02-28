import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { Router, Route, nativeHistory } from 'react-router-native';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { checkUri } from './utils'


//redux bitch
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import createLogger from 'redux-logger'


import OfferList from './modules/offer/containers/offerList';


//import modules..
import offerModule from './modules/offer';


const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/cizgfyug35koz0169oafbe8py' }),
});



const store = createStore(
  combineReducers({
    ...offerModule.reducers,
    routing: routerReducer,
    apollo: client.reducer(),
  }),
  {}, // initial state
  compose(
      applyMiddleware(
        createLogger({ predicate: () => __DEV__ }),
        client.middleware(),
        ReduxThunk
      )
  )
);


// this is only for better error messages
console.log(checkUri(client.networkInterface));

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(nativeHistory, store);
// Set current path to '/'
history.push('/');

export default (
  <ApolloProvider client={client} store={store}>
    <Router history={history}>
      <Route path="/" component={OfferList} />
    </Router>
  </ApolloProvider>
)
