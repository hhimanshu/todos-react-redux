export default function todos(state = [], action) {
    switch(action.type) {
        case 'ADD_TODO':
            return [...state, Object.assign({}, action.todo)];
        default:
            return state
    }
}