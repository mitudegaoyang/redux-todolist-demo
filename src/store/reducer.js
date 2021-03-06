
import {CHANGE_INPUT,ADD_INPUT,DELETE_ITEM,GET_LIST} from './actionTypes'
const defaultState = {
    inputValue: '',
    list: []
}
export default (state = defaultState, action) => {
    // reducer中只能接收state不能改变state
    if (action.type === CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }

    if (action.type === ADD_INPUT && state.inputValue!=='') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push({'id': Date.parse(new Date()), 'name': state.inputValue})
        newState.inputValue = ''
        return newState
    }

    if (action.type === DELETE_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.value, 1)
        return newState
    }

    if (action.type === GET_LIST) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data
        return newState
    }

    return state
}