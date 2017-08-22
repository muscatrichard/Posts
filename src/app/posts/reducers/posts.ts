import { Post } from '../models/post';
import * as posts from '../actions/posts';
import * as _ from 'lodash';

export interface State {
    loaded: boolean;
    loading: boolean;
    posts: Post[];
    selectedPostId: string;
}

export const initialState: State = {
    loaded: false,
    loading: false,
    posts: [],
    selectedPostId: null
}

export function reducer(state = initialState, action: posts.Actions): State {
    switch (action.type) {
        case posts.LOAD: {
            return Object.assign({}, state,{
                loaded: false,
                loading: true,
                posts: []
            })  
        }
        case posts.LOAD_SUCCESS: {
            const posts = action.payload;
            return Object.assign({}, state,{
                loaded: true,
                loading: false,
                posts: posts,
            })  
        }
        case posts.LOAD_FAIL: {
            return initialState;
        }
        case posts.SELECT: {
            return Object.assign({},state,{
                selectedPostId: action.payload
            })
        }
        case posts.DESELECT: {
            return Object.assign({},state,{
                selectedPostId: null
            })
        }
        default: {
            return state;
        }
    }

}

export const getLoaded = (state: State) => state.loaded;
export const getLoading = (state: State) => state.loading;
export const getPosts = (state: State) => state.posts;
export const getSelectedPost = (state: State) =>  _.first( _.filter(state.posts, {id: +(state.selectedPostId)}));
export const getIsPostSelected = (state: State) => !!state.selectedPostId;