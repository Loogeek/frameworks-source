const initState = {
    title: {
        text: 'Welcome to Redux',
        color: 'red'
    },
    content: {
        text: 'Hello World',
        color: 'yellow'
    }
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case 'CHANGE_TITLE_TXT':
            return { 
                ...state, 
                title: {
                    ...state.title,
                    text: action.text 
                }
            };
        case 'CHANGE_TITLE_COLOR':
            return { 
                ...state, 
                title: {
                    ...state.title,
                    color: action.color 
                }
            };
        default:
            return state;
    }
};