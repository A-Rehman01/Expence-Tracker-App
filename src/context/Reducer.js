const Reducer = (state, action) => {

    switch (action.type) {

        case 'DELETE':
            return {
                ...state,  //currentstate
                // wo id  kat di jo payload se i thi
                transections: state.transections.filter(transection => (transection.id !== action.payload))
            }
        case 'ADD':
            return {
                ...state,
                transections:[action.payload,...state.transections]
            }
        default:
            return state;
    }
}
export default Reducer;