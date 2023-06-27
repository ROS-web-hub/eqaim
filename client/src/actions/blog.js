import api from '../utils/api';
import axios from 'axios';
import { setAlert } from './alert';
import Swal from 'sweetalert2'
import { BLOG_LIST, VIEW_BLOG } from './types';

export const getList = () => async (dispatch) => {

    try {
        const res = await api.get('/blog/list');
        if (res.data) {
            dispatch({
                type: BLOG_LIST,
                payload: res.data
            });
        }
    } catch (err) {
    }
}

export const createBlog = (content) => async (dispatch) => {
    console.log("%c Line:22 🥓 content", "color:#7f2b82", content);
    if (content.length > 200000) {
        Swal.fire({
            icon: 'error',
            title: 'error',
            text: 'File size is too large!  File size must be under 200KB',
        })
    }
    
    try {
        const res = await api.post('/blog/create', { content });
        if (res.data) {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'New blog published!',
            })
        }
    } catch (err) {

    }
}

export const viewBlog = (id) => async (dispatch) => {
    try {
        const res = await api.get('/blog/viewBlog', { params: { id } });
        dispatch({
            type: VIEW_BLOG,
            payload: res.data
        });


    } catch (error) {

    }

}