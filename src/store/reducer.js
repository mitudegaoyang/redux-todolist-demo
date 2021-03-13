
import {CHANGE_INPUT,ADD_INPUT,DELETE_ITEM} from './actionTypes'
const defaultState = {
    inputValue: '',
    list: [
        '早',
        '中',
        '晚'
    ]
}
export default (state = defaultState, action) => {
    // reducer中只能接收state不能改变state
    if (action.type === CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }

    if (action.type === ADD_INPUT) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(state.inputValue)
        newState.inputValue = ''
        return newState
    }

    if (action.type === DELETE_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.value, 1)
        return newState
    }

    return state
}