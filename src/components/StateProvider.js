import React,{createContext,useContext, useReducer} from "react";
// import reducer, {initialState} from './reducer';
export const StateContext = createContext();            //Creating Context where data layer actually lives
// State Provider : Data Layer 

export const StateProvider = ({reducer,initialState,children}) => (
    
    <StateContext.Provider value = {useReducer(reducer,initialState)}>  {/* Allows to sert DataLayer */}
    {children}
    </StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext);