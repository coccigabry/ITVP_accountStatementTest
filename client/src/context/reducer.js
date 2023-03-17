const reducer = (state, action) => {

    switch (action.type) {
        case 'LOGIN':
            return {...state, isUserLogged: true}
        case 'IMPORT_FILE':
            return {...state, isFileImported: true}
        case 'FETCH_DATA':
            return {...state, data: action.payload}
        default:
            throw new Error(`Unknown action type: ${action.type}`)
    }
}


export default reducer