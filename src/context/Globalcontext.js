import React, { createContext,useReducer } from 'react';
import Reducer from './Reducer'

//object ke under array  of object
const initialState = {
    transections: []
}


export const Globalcontext = createContext(initialState);

const GlobalProvider = ({ children }) => {

let [state,dispatch]=useReducer(Reducer,initialState);

//Actions of dispatch

//delete trasection

function Deletetrasection(id){
    dispatch(
        {
            type: 'DELETE',
            payload: id           
        }
    );
}
function Addtrasection(newtrasec){
    dispatch(
        {
            type: 'ADD',
            payload: newtrasec           
        }
    );
}
//state.trasection isliye ke is se sirf object  ki  wha array jae gi
//agr  state krte to  pura  trasection jata to phe msla hota maping me

    return (
        <Globalcontext.Provider value={
            { transections: state.transections , Deletetrasection , Addtrasection}    //Trasection array of object whenacces of particular array that why trasection : trasection.state 
        } >
            {children}
        </Globalcontext.Provider>
    );
}

export default GlobalProvider;