const is = {count:0};
const reducer = (state=is, action) => {
    switch(action.type)
    {
        case "Increment":
            return {count:state.count+1};
        case "Decrement":
            return {count:state.count-1};
        case "Add":
            return {count:state.count+action.payload.value};
        case "Subtract":
            return {count:state.count-action.payload.value};
        default:
            return state;
    }
}
export default reducer;