import * as actions from './types'

export const addOne = () => {
    return {
        type: actions.ADD_ONE
    }
}

export const addTen = () => {
    return {
        type: actions.ADD_TEN
    }
}

export const subtractOne = () => {
    return {
        type: actions.SUBTRACT_ONE
    }
}

export const subtractTen = () => {
    return {
        type: actions.SUBTRACT_TEN
    }
}

export const customAdd = val => {
    return {
        type: actions.CUSTOM_ADD,
        val
    }
}

export const customSubtract = val => {
    return {
        type: actions.CUSTOM_SUBTRACT,
        val
    }
}