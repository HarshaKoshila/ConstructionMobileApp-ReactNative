export function languageReducer (state = 'English', action) {
    switch (action.type) {
        case 'CHANGE_LANGUAGE':
            return action.payload;
            break;
    }
    return state;
}