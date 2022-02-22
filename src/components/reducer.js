export const initialState = {
    user: null,
   
    alertMessage: null,
};
export const actionTypes = {
    SET_USER: "SET_USER",
    SET_ALERTMESSAGE: "SET_ALERTMESSAGE",
}

const reducer = (state,action) => {
    switch(action.type)
    {
        case actionTypes.SET_USER:
            return  {
                            ...state,
                            user: action.user,          //  Change the user to what we dispatched
                    };
        case actionTypes.SET_ALERTMESSAGE:
            // console.log(action.dashboard)
            // alert(action.alertMessage)
            return {
                    ...state,
                    alertMessage: action.alertMessage,
            }                    
        default:
            return state;
    }
}
export default reducer;