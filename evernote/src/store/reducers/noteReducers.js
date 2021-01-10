const initialState = {
    noteToEdit:{}
}

const noteReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case 'Edit_Note':
        return payload 

    default:
        return state
    }
}

export default noteReducer
