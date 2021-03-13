import {CHANGE_INPUT,ADD_INPUT,DELETE_ITEM,GET_LIST} from './actionTypes'

export const changeInputAction = (value)=> ({
    type: CHANGE_INPUT,
    value
})

export const addInputAction = ()=> ({
    type: ADD_INPUT,
})

export const deleteItemAction = (value)=> ({
    type: DELETE_ITEM,
    value
})

export const getListAction = (data)=> ({
    type: GET_LIST,
    data
})