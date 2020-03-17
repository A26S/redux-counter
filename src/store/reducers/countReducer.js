const init = {
    count: 0
}

const countReducer = (state = init, action) => {
    action.val = parseInt(action.val)
    switch (action.type) {
        case "ADD_ONE":
            return {
                ...state,
                count: state.count + 1
            }
        case "ADD_TEN":
            return {
                ...state,
                count: state.count + 10
            }
        case "SUBTRACT_ONE":
            return {
                ...state,
                count: state.count - 1
            }
        case "SUBTRACT_TEN":
            return {
                ...state,
                count: state.count - 10
            }
        case "CUSTOM_ADD":
            return {
                ...state,
                count: state.count + action.val
            }
        case "CUSTOM_SUBTRACT":
            return {
                ...state,
                count: state.count - action.val
            }
        default:
            return state
    }
}

export default countReducer