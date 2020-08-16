//setting up the data layer
//we need this track the basket

import React, { createContext, useContext, useReducer } from 'react';

//THIS IS THE DATA LAYER

export const StateContext = createContext();

//BUILDING THE PROVIDER

export const StateProvider = ({ reducer, initialState, children }) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>{children}</StateContext.Provider>
);

//This is used to use values inisde the component

export const useStateValue = () => useContext(StateContext);
