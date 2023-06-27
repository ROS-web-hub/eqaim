import {
    BLOG_LIST,
    VIEW_BLOG
} from '../actions/types';

const initialState = {
    blog_list: [],
    blog: {}
};

function authReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case BLOG_LIST:
            return {
                ...state,
                blog_list: payload
            };
        case VIEW_BLOG:
            return {
                ...state,
                blog: payload
            }
        default:
            return state;
    }
}

export default authReducer;
